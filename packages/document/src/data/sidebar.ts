import { components, frameworks } from '@app/data';
import * as Utils from '@app/utils';

export const sidebar = (framework: string) => [
  {
    title: 'Introduction',
    items: [
      {
        title: `What's HTMLPLUS?`,
        url: Utils.getPath('INTRODUCTION_WHAT')
      },
      {
        title: `Why HTMLPLUS?`,
        url: Utils.getPath('INTRODUCTION_WHY')
      }
    ]
  },
  {
    title: 'Getting started',
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
    title: 'Frameworks',
    items: frameworks.map((framework) => ({
      title: framework.title,
      url: Utils.getPath('INSTALLATION_FRAMEWORK', { framework: framework.key })
    }))
  },
  {
    title: 'UI Components',
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
    items: components.map((component) => ({
      title: component.title,
      url: Utils.getPath('API_DETAILS', { framework, component: component.key })
    }))
  },
  {
    title: 'About',
    items: [
      {
        title: 'Code Of Conduct',
        url: Utils.getPath('CODEOFCONDUCT')
      }
    ]
  },
  {
    title: 'Features',
    items: [
      {
        title: 'Bidirectionality',
        url: Utils.getPath('BIDIRECTIONALITY')
      }
    ]
  },
  {
    title: 'Utils',
    items: [
      {
        title: 'Animations',
        url: Utils.getPath('ANIMATIONS')
      }
    ]
  }
];
