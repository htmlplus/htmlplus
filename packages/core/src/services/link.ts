import { host } from '@app/helpers';

type LinkConfig = (instance: LinkInstance) => string | undefined;
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

const properties: LinkProperty[] = [];

const bind = (property: LinkProperty): void => {
  switch (property.type) {
    case 'ACTION':
      getRelated(property, 'INJECT').forEach((to) => inject(property, to));
      break;
    case 'OBSERVABLE':
      // TODO proxy()
      getRelated(property, 'INJECT').forEach((to) => inject(property, to));
      break;
    case 'INJECT':
      getRelated(property, 'ACTION', 'OBSERVABLE').forEach((to) => inject(to, property));
      break;
  }
};

const connect = (property: LinkProperty): void => {
  property = prepare(property);
  register(property);
  if (property.namespace) return bind(property);
  queue(property);
};

const disconnect = (property: LinkProperty): void => {
  property = filter(property).at(0);
  unbind(property);
  unregister(property);
};

const filter = (parameters: Partial<LinkProperty>): LinkProperty[] => {
  const keys = Object.keys(parameters);
  return properties.filter((property) => {
    for (const key of keys) if (property[key] != parameters[key]) return false;
    return true;
  });
};

const findParent = (property: LinkProperty): LinkProperty | undefined => {
  let element = property.element?.parentElement;
  while (element) {
    if (element.shadowRoot) {
      const [parent] = filter({ element, name: property.name });
      if (parent) return parent;
    }
    element = element.parentElement;
  }
};

const getRelated = (property: LinkProperty, ...types: LinkPropertyType[]): LinkProperty[] => {
  return filter({
    name: property.name,
    namespace: property.namespace
  }).filter((property) => types.includes(property.type));
};

const inject = (from: LinkProperty, to: LinkProperty): void => {
  let value = from.instance[from.name];
  if (typeof value === 'function') value = value.bind(from.instance);
  to.instance[to.name] = value;
};

const prepare = (property: LinkProperty): LinkProperty => {
  const { config, instance, name } = property;

  const element = host(instance);

  const initialize = instance[name];

  const namespace = config?.(instance);

  return Object.assign({}, property, { element, initialize, namespace });
};

// TODO
let timeout;
const unresolved = new Set<LinkProperty>();
const queue = (property: LinkProperty): void => {
  unresolved.add(property);
  // console.log(1111, unresolved);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    Array.from(unresolved).forEach((source) => {
      const parent = findParent(source);
      if (!parent) return;
      source.namespace = parent.namespace;
      if (!source.namespace) return;
      unresolved.delete(source);
      bind(source);
    });
  }, 0);
};

const reconnect = (instance: LinkInstance): void => {
  filter({ instance }).forEach((property) => {
    disconnect(property);
    connect(property);
  });
};

const register = (property: LinkProperty): void => {
  properties.push(property);
};

const reset = (property: LinkProperty): void => {
  property.instance[property.name] = property.initialize;
};

const unbind = (property: LinkProperty): void => {
  switch (property.type) {
    case 'ACTION':
      getRelated(property, 'INJECT').forEach((to) => reset(to));
      break;
    case 'INJECT':
      reset(property);
      break;
    case 'OBSERVABLE':
      // TODO
      break;
  }
};

const unregister = (property: LinkProperty): void => {
  const index = properties.findIndex((item) => item === property);
  properties.splice(index, 1);
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

export const createLink = (config?: LinkConfig) => {
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
