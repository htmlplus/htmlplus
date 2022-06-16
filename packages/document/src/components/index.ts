import dynamic from 'next/dynamic';

// TODO
export const AspectRatio = dynamic<any>(() => import('@htmlplus/react').then(({ AspectRatio }) => AspectRatio), {
  ssr: false
});
export const Breadcrumb = dynamic<any>(() => import('@htmlplus/react').then(({ Breadcrumb }) => Breadcrumb), {
  ssr: false
});
export const Browse = dynamic<any>(() => import('@htmlplus/react').then(({ Browse }) => Browse), { ssr: false });
export const Card = dynamic<any>(() => import('@htmlplus/react').then(({ Card }) => Card), { ssr: false });
export const ClickOutside = dynamic<any>(() => import('@htmlplus/react').then(({ ClickOutside }) => ClickOutside), {
  ssr: false
});
export const Cropper = dynamic<any>(() => import('@htmlplus/react').then(({ Cropper }) => Cropper), { ssr: false });
export const Dialog = dynamic<any>(() => import('@htmlplus/react').then(({ Dialog }) => Dialog), { ssr: false });
export const Divider = dynamic<any>(() => import('@htmlplus/react').then(({ Divider }) => Divider), { ssr: false });
export const Drawer = dynamic<any>(() => import('@htmlplus/react').then(({ Drawer }) => Drawer), { ssr: false });
export const Grid = dynamic<any>(() => import('@htmlplus/react').then(({ Grid }) => Grid), { ssr: false });
Grid.Item = dynamic<any>(() => import('@htmlplus/react').then(({ Grid }) => Grid.Item), { ssr: false });
export const Icon = dynamic<any>(() => import('@htmlplus/react').then(({ Icon }) => Icon), { ssr: false });
export const Intersection = dynamic<any>(() => import('@htmlplus/react').then(({ Intersection }) => Intersection), {
  ssr: false
});
export const Portal = dynamic<any>(() => import('@htmlplus/react').then(({ Portal }) => Portal), { ssr: false });
export const ScrollIndicator = dynamic<any>(
  () => import('@htmlplus/react').then(({ ScrollIndicator }) => ScrollIndicator),
  { ssr: false }
);
export const Spinner = dynamic<any>(() => import('@htmlplus/react').then(({ Spinner }) => Spinner), { ssr: false });
export const Sticky = dynamic<any>(() => import('@htmlplus/react').then(({ Sticky }) => Sticky), { ssr: false });
export const Switch = dynamic<any>(() => import('@htmlplus/react').then(({ Switch }) => Switch), { ssr: false });
export const Tabs = dynamic<any>(() => import('@htmlplus/react').then(({ Tabs }) => Tabs), { ssr: false });
export const Tooltip = dynamic<any>(() => import('@htmlplus/react').then(({ Tooltip }) => Tooltip), { ssr: false });
export const Transition = dynamic<any>(() => import('@htmlplus/react').then(({ Transition }) => Transition), {
  ssr: false
});

export * from './alert';
export * from './browser-support';
export * from './button';
export * from './code';
export * from './contributors';
export * from './example';
export * from './examples';
export * from './footer';
export * from './header';
export * from './markup';
export * from './navigation';
export * from './playground';
export * from './sidebar';
export * from './socials';
export * from './text';
export * from './usage';

// TODO
// export * from './api';
// export * from './box';
// export * from './framework-selector';
// export * from './input';
// export * from './page';
// export * from './parameters';
// export * from './toc';