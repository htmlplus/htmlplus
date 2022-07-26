import { register } from '../register';

register('rotate-out', [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0' }
]);

// TODO
// transform-origin: center;