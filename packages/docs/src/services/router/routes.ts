import * as Constants from '@app/constants';
import { frameworks } from '@app/data';
import { Router } from './router';

export const router = new Router();

router.register({
    name: 'ROUTE:HOME',
    path: '/'
});

// JOIN

router.register({
    name: 'ROUTE:JOIN',
    path: '/join'
});

// INTRODUCTION

// router.register({
//     name: 'ROUTE:INTRODUCTION:VISION',
//     path: '/introduction/vision'
// });

router.register({
    name: 'ROUTE:INTRODUCTION:WHAT',
    path: `/introduction/what-is-${Constants.PLATFORM_KEY}`
});

router.register({
    name: 'ROUTE:INTRODUCTION:WHY',
    path: `/introduction/why-${Constants.PLATFORM_KEY}`
});

// INSTALLATION

router.register({
    name: 'ROUTE:INSTALLATION',
    path: '/installation'
});

frameworks.forEach((framework) => {

    const { key } = framework;

    router.register({
        name: `ROUTE:INSTALLATION:${key.toUpperCase()}`,
        path: `/installation/${key}`
    })
});

// GETTINGSTARTED

router.register({
    name: 'ROUTE:GETTINGSTARTED:BROWSERSUPPORT',
    path: '/getting-started/browser-support'
});

// COMPONENT

router.register({
    name: 'ROUTE:COMPONENT:DETAILS',
    path: '/component/[key]'
});

router.register({
    name: 'ROUTE:COMPONENT:TRANSITION:PROPERTY:NAME',
    path: '/component/transition/names'
});

// ABOUT

router.register({
    name: 'ROUTE:ABOUT:CODEOFCONDUCT',
    path: '/code-of-conduct'
});