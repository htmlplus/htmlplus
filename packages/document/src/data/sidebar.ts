import * as Constants from '@app/constants';
import { components } from '@app/data';

export const sidebar = [
  {
    title: 'Introduction',
    icon: 'introduction',
    items: [
      {
        title: `What's ${Constants.PLATFORM_NAME}?`,
        route: {
          to: Constants.ROUTE.INTRODUCTION_WHAT
        }
      },
      {
        title: `Why ${Constants.PLATFORM_NAME}?`,
        route: {
          to: Constants.ROUTE.INTRODUCTION_WHY
        }
      }
    ]
  },
  {
    title: 'Getting started',
    icon: 'getting-started',
    items: [
      {
        title: 'Installation',
        route: {
          to: Constants.ROUTE.INSTALLATION
        }
      },
      {
        title: 'Browser support',
        route: {
          to: Constants.ROUTE.GETTINGSTARTED_BROWSERSUPPORT
        }
      }
    ]
  },
  {
    title: 'UI Components',
    icon: 'components',
    items: components.map((component) => ({
      title: component.title,
      route: {
        to: Constants.ROUTE.COMPONENT_DETAILS,
        params: {
          key: component.key
        }
      }
    }))
  },
  {
    title: 'About',
    icon: 'htmlplus',
    items: [
      {
        title: 'Code Of Conduct',
        route: {
          to: Constants.ROUTE.ABOUT_CODEOFCONDUCT
        }
      }
    ]
  }
];
