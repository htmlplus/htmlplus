import { register } from '../register';

register('rotate-out-down-left', [
  { offset: 0, opacity: '1' },
  { offset: 1, transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0' }
]);

// TODO
// transform-origin: left bottom;
