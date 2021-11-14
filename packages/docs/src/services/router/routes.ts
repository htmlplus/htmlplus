import * as Constants from '@app/constants';
import { Router } from './router';

export const router = new Router();

router.register({
    name: 'ROUTE:HOME',
    path: '/'
});

// INTRODUCTION

router.register({
    name: 'ROUTE:INTRODUCTION:VISION',
    path: '/introduction/vision'
});

router.register({
    name: 'ROUTE:INTRODUCTION:WHAT',
    path: `/introduction/what-is-${Constants.PLATFORM_KEY}`
});

router.register({
    name: 'ROUTE:INTRODUCTION:WHY',
    path: `/introduction/why-${Constants.PLATFORM_KEY}`
});

// GETTINGSTARTED

router.register({
    name: 'ROUTE:GETTINGSTARTED:INSTALLATION',
    path: '/getting-started/installation'
});

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









// router.register({
//     name: 'ROUTE:FRAMEWORK:ANGULAR',
//     path: '/framework/angular'
// });

// router.register({
//     name: 'ROUTE:FRAMEWORK:JAVASCRIPT',
//     path: '/framework/javascript'
// });

// router.register({
//     name: 'ROUTE:FRAMEWORK:OVERVIEW',
//     path: '/framework/overview'
// });

// router.register({
//     name: 'ROUTE:FRAMEWORK:REACT',
//     path: '/framework/react'
// });

// router.register({
//     name: 'ROUTE:FRAMEWORK:VUE',
//     path: '/framework/vue'
// });

