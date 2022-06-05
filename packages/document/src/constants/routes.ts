import * as Constants from '@app/constants';
import { frameworks } from '@app/data';

export const ROUTES = [
  {
    name: 'ROUTE:HOME',
    path: '/'
  },

  // JOIN

  {
    name: 'ROUTE:JOIN',
    path: '/join'
  },

  // INTRODUCTION

  // {
  //     name: 'ROUTE:INTRODUCTION:VISION',
  //     path: '/introduction/vision'
  // },

  {
    name: 'ROUTE:INTRODUCTION:WHAT',
    path: `/introduction/what-is-${Constants.PLATFORM_KEY}`
  },

  {
    name: 'ROUTE:INTRODUCTION:WHY',
    path: `/introduction/why-${Constants.PLATFORM_KEY}`
  },

  // INSTALLATION

  {
    name: 'ROUTE:INSTALLATION',
    path: '/installation'
  },

  ...frameworks.map((framework) => ({
    name: `ROUTE:INSTALLATION:${framework.key.toUpperCase()}`,
    path: `/installation/${framework.key}`
  })),

  // GETTINGSTARTED

  {
    name: 'ROUTE:GETTINGSTARTED:BROWSERSUPPORT',
    path: '/getting-started/browser-support'
  },

  // COMPONENT

  {
    name: 'ROUTE:COMPONENT:DETAILS',
    path: '/component/[key]'
  },

  {
    name: 'ROUTE:COMPONENT:TRANSITION:PROPERTY:NAME',
    path: '/component/transition/names'
  },

  // ABOUT

  {
    name: 'ROUTE:ABOUT:CODEOFCONDUCT',
    path: '/code-of-conduct'
  }
];
