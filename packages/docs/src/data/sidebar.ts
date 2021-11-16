import { components } from './components';
import * as Constants from '@app/constants';

export const sidebar = [
  {
    title: 'Introduction',
    icon: 'introduction',
    items: [
      {
        title: `What’s ${Constants.PLATFORM_NAME}?`,
        route: {
          to: 'ROUTE:INTRODUCTION:WHAT',
        },
      },
      {
        title: `Why ${Constants.PLATFORM_NAME}?`,
        route: {
          to: 'ROUTE:INTRODUCTION:WHY',
        },
      },
      // {
      //     title: 'Long-term Support',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
      // {
      //     title: 'Vision',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:VISION',
      //     },
      // },
      // {
      //     title: 'Roadmap',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
      // {
      //     title: 'Versions',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
      // {
      //     title: 'Release notes',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
      // {
      //     title: 'Licence',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
    ]
  },
  {
    title: 'Getting started',
    icon: 'getting-started',
    items: [
      {
        title: 'Installation',
        route: {
          to: 'ROUTE:INSTALLATION',
        },
      },
      // {
      //     title: 'Frequently asked questions',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
      {
        title: 'Browser support',
        route: {
          to: 'ROUTE:GETTINGSTARTED:BROWSERSUPPORT',
        },
      },
      // {
      //     title: 'Upgrade guide',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
      // {
      //     title: 'Contributing',
      //     route: {
      //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //     },
      // },
    ]
  },
  // {
  //     title: 'Features',
  //     icon: 'features',
  //     items: [
  //         {
  //             title: 'Global config',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'Display Breakpoint',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'Framework Integrations',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'Accessibility (a11y)',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'Bidirectionality (LTR/RTL)',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'CSS Reset',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'Server side rendering',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'Cancelable event',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //     ]
  // },
  // {
  //     title: 'Animations',
  //     icon: 'animations',
  //     items: [
  //         {
  //             title: 'Animation Guideline',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //         {
  //             title: 'Transition',
  //             route: {
  //                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //             },
  //         },
  //     ]
  // },
  {
    title: 'UI Components',
    icon: 'components',
    items: components
      .filter((item) => item.main)
      .map((component) => ({
        title: component.title + (component.development ? ' [development]' : ''),
        route: {
          to: 'ROUTE:COMPONENT:DETAILS',
          params: {
            key: component.key,
          },
        }
      })),
  },
  {
    title: 'About',
    icon: 'htmlplus',
    items: [
      {
        title: 'Code Of Conduct',
        route: {
          to: 'ROUTE:ABOUT:CODEOFCONDUCT',
        },
      },
      // {
      //   title: 'Meet the team',
      //   route: {
      //     to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //   },
      // },
      // {
      //   title: 'Sponsors and backers',
      //   route: {
      //     to: 'ROUTE:INTRODUCTION:QUICKSTART',
      //   },
      // },
    ]
  },
  // {
  //     title: 'Framework Integrations',
  //     items: [
  //         {
  //             title: 'Overview',
  //             route: {
  //                 to: 'ROUTE:FRAMEWORK:OVERVIEW',
  //             },
  //         },
  //         {
  //             title: 'React',
  //             route: {
  //                 to: 'ROUTE:FRAMEWORK:REACT',
  //             },
  //         },
  //         {
  //             title: 'Angular',
  //             route: {
  //                 to: 'ROUTE:FRAMEWORK:ANGULAR',
  //             },
  //         },
  //         {
  //             title: 'Vue',
  //             route: {
  //                 to: 'ROUTE:FRAMEWORK:VUE',
  //             },
  //         },
  //         {
  //             title: 'JavaScript',
  //             route: {
  //                 to: 'ROUTE:FRAMEWORK:JAVASCRIPT',
  //             },
  //         },
  //     ],
  // },
]
