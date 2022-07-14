import dynamic from 'next/dynamic';

export const Test = dynamic<any>(() => import('./Test').then((component) => component), { ssr: false });
