import { host } from '@app/helpers';

type LinkConfig = (instance: LinkInstance) => string;
type LinkInstance = any;
type LinkPropertyType = 'ACTION' | 'INJECT' | 'OBSERVABLE';
type LinkProperty = {
  config?: LinkConfig;
  element?: HTMLElement;
  initialize?: any;
  instance?: LinkInstance;
  name?: PropertyKey;
  namespace?: string;
  type?: LinkPropertyType;
};

const parents = new Map<LinkInstance, LinkProperty>();

const properties: LinkProperty[] = [];

const connect = (source: LinkProperty) => {
  const { config, instance, name, type } = source;

  const element = host(instance);

  const initialize = instance[name];

  const namespace = config(instance);

  Object.assign(source, { element, initialize, namespace });

  properties.push(source);

  // TODO
  // if (!namespace) {
  //   source.namespace = parent(source)?.namespace;
  //   return;
  // }

  inject(source);

  // TODO
  // properties
  //   .filter((property) => !property.namespace && property.name == name)
  //   .forEach((property) => {
  //     inject(property);
  //   });
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

const inject = (source: LinkProperty) => {
  switch (source.type) {
    case 'ACTION':
      related(source, 'INJECT').forEach((destination) => set(source, destination));
      break;
    case 'OBSERVABLE':
      proxy(source);
      related(source, 'INJECT').forEach((destination) => set(source, destination));
      break;
    case 'INJECT':
      related(source, 'ACTION', 'OBSERVABLE').forEach((destination) => set(destination, source));
      break;
  }
};

const parent = (source: LinkProperty) => {
  const cache = parents.get(source.instance);

  if (cache) return cache;

  let node = source.element?.parentElement;

  while (node) {
    if (node.shadowRoot) {
      const [parent] = filter({ element: node, name: source.name });
      if (parent) {
        return parents.set(source.instance, parent).get(parent);
      }
    }
    node = node.parentElement;
  }
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

const related = (source: LinkProperty, ...types: LinkPropertyType[]) => {
  return filter({
    name: source.name,
    namespace: source.namespace
  }).filter((destination) => types.includes(destination.type));
};

const set = (source: LinkProperty, destination: LinkProperty) => {
  let value = source.instance[source.name];
  if (typeof value === 'function') value = value.bind(source.instance);
  destination.instance[destination.name] = value;
};

const Decorator = (type: LinkPropertyType, config: LinkConfig) => {
  return () => (target: any, name: PropertyKey) => {
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
