import { host } from '@app/helpers';

type LinkConfig = (instance: LinkInstance) => string;
type LinkInstance = any;
type LinkTarget = any;
type LinkPropertyName = string;
type LinkPropertyType = 'ACTION' | 'INJECT' | 'OBSERVABLE';
type LinkProperty = {
  config?: LinkConfig;
  element?: HTMLElement;
  initialize?: any;
  instance?: LinkInstance;
  name?: LinkPropertyName;
  namespace?: string;
  type?: LinkPropertyType;
};

const properties: LinkProperty[] = [];

const connect = (source: LinkProperty) => {
  const { config, instance, name, type } = source;

  const element = instance.$host$();

  const initialize = instance[name];

  const namespace = config(instance);

  Object.assign(source, { element, initialize, namespace });

  properties.push(source);

  switch (type) {
    case 'ACTION':
      siblings(source, 'INJECT').forEach((destination) => inject(source, destination));
      break;
    case 'OBSERVABLE':
      proxy(source);
      siblings(source, 'INJECT').forEach((destination) => inject(source, destination));
      break;
    case 'INJECT':
      siblings(source, 'ACTION', 'OBSERVABLE').forEach((destination) => inject(destination, source));
      break;
  }
};

const disconnect = (source: LinkProperty) => {
  source = filter(source).at(0);
  const index = properties.findIndex((item) => item === source);
  if (index == -1) return;
  properties.splice(index, 1);
};

const filter = (source: LinkProperty) => {
  const keys = Object.keys(source);
  return properties.filter((item) => {
    for (const key of keys) if (item[key] != source[key]) return false;
    return true;
  });
};

const inject = (source: LinkProperty, destination: LinkProperty) => {
  let value = source.instance[source.name];
  if (typeof value === 'function') value = value.bind(source.instance);
  destination.instance[destination.name] = value;
};

const proxy = (source: LinkProperty) => {
  // let value = get(source);
  // // TODO: any
  // defineProperty(source.instance, source.name as any, {
  //   enumerable: true,
  //   configurable: true,
  //   get() {
  //     return value;
  //   },
  //   set(input) {
  //     if (input === value) return;
  //     value = input;
  //     siblings(source, ['inject']).map((destination) => set(destination, value));
  //   }
  // });
};

const reconnect = (instance: LinkInstance) => {
  filter({ instance }).forEach((property) => {
    disconnect(property);
    connect(property);
  });
};

const siblings = (source: LinkProperty, ...types: LinkPropertyType[]) => {
  return filter({
    name: source.name,
    namespace: source.namespace
  }).filter((destination) => types.includes(destination.type));
};

const Decorator = (type: LinkPropertyType, config: LinkConfig) => {
  return () => (target: LinkTarget, name: LinkPropertyName) => {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      connectedCallback?.call(this);
      connect({
        config,
        instance: this,
        name,
        type
      });
    };
    target.disconnectedCallback = function () {
      disconnectedCallback?.call(this);
      disconnect({
        instance: this,
        name
      });
    };
  };
};

export const createLink = (config: LinkConfig) => {
  const Action = Decorator('ACTION', config);
  const Inject = Decorator('INJECT', config);
  const Observable = Decorator('OBSERVABLE', config);
  return {
    Action,
    Inject,
    Observable,
    reconnect
  };
};
