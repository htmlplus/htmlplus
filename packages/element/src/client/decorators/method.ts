import { DecoratorSetup, decorator } from '../utils/index.js';

export function Method() {
  const setup: DecoratorSetup = (target: Object, propertyKey: PropertyKey) => {
    return {
      type: 'method',
      onReady(host: HTMLElement) {
        Object.defineProperty(host, propertyKey, {
          get: () => {
            return this[propertyKey].bind(this);
          }
        });
      }
    };
  };
  return decorator(setup);
}