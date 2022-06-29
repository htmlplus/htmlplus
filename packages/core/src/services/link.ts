import { host } from '@app/helpers';

const links = new Map<string, any>();

type LinkProperty = {
  element?: HTMLElement;
  initialize?: any;
  instance?: any;
  name?: string;
  type?: 'action' | 'inject' | 'observable';
};

export const createLink = (namespace: string) => {
  if (links.has(namespace)) return links.get(namespace);

  const properties: Array<LinkProperty> = [];

  const connect = (key: string, property: LinkProperty) => {
    const isExist = properties.some(({ instance, name }) => instance === property.instance && name === property.name);

    if (isExist) console.error('TODO');

    properties.push(property);

    switch (property.type) {
      case 'action':
        break;
      case 'observable':
        break;
      case 'inject':
        break;
    }

    console.log(1, key, property);
  };

  const disconnect = (key: string) => {
    console.log(2, key);
  };

  const reconnect = (instance) => {};

  const decorator = (type) => () => (target, name) => {
    const key = Math.random().toString();

    const { connectedCallback, disconnectedCallback } = target;

    target.connectedCallback = function () {
      connectedCallback?.bind(this)();
      connect(key, {
        element: host(this),
        initialize: this[name],
        instance: this,
        name,
        type
      });
    };

    target.disconnectedCallback = function () {
      disconnectedCallback?.bind(this)();
      disconnect(key);
    };
  };

  const Action = decorator('action');

  const Inject = decorator('inject');

  const Observable = decorator('observable');

  links.set(namespace, {
    Action,
    Inject,
    Observable,
    reconnect
  });

  return links.get(namespace);
};
