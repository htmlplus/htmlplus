import * as Constants from '@app/constants';
import { components } from '@app/data';
import * as Utils from '@app/utils';

export const sidebar = (framework: string) => [
  {
    title: 'Introduction',
    icon: 'introduction',
    items: [
      {
        title: `What's ${Constants.PLATFORM_NAME}?`,
        url: Utils.getPath('INTRODUCTION_WHAT')
      },
      {
        title: `Why ${Constants.PLATFORM_NAME}?`,
        url: Utils.getPath('INTRODUCTION_WHY')
      }
    ]
  },
  {
    title: 'Getting started',
    icon: 'getting-started',
    items: [
      {
        title: 'Installation',
        url: Utils.getPath('INSTALLATION')
      },
      {
        title: 'Browser support',
        url: Utils.getPath('BROWSERS')
      }
    ]
  },
  {
    title: 'UI Components',
    icon: 'components',
    items: components
      // TODO: detect sub components
      .filter((component) => !!component.readme)
      .map((component) => ({
        title: component.title,
        url: Utils.getPath('COMPONENT_DETAILS', { framework, component: component.key })
      }))
  },
  {
    title: 'UI Components API',
    icon: 'components',
    items: components.map((component) => ({
      title: component.title,
      url: Utils.getPath('API_DETAILS', { framework, component: component.key })
    }))
  },
  {
    title: 'About',
    icon: 'htmlplus',
    items: [
      {
        title: 'Code Of Conduct',
        url: Utils.getPath('CODEOFCONDUCT')
      }
    ]
  },
  {
    title: 'Features',
    icon: 'htmlplus',
    items: [
      {
        title: 'Bidirectionality',
        url: Utils.getPath('BIDIRECTIONALITY')
      }
    ]
  },
  {
    title: 'Utils',
    icon: 'htmlplus',
    items: [
      {
        title: 'Animations',
        url: Utils.getPath('ANIMATIONS')
      }
    ]
  }
];
