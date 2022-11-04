import { components, frameworks } from '@app/data';
import { ROUTES, getPath } from '@app/utils';

export const sidebar = (framework: string) => [
  {
    title: 'Introduction',
    items: [
      {
        title: `What's HTMLPLUS?`,
        url: getPath(ROUTES.INTRODUCTION_WHAT, {})
      },
      {
        title: `Why HTMLPLUS?`,
        url: getPath(ROUTES.INTRODUCTION_WHY, {})
      }
    ]
  },
  {
    title: 'Getting started',
    items: [
      {
        title: 'Installation',
        url: getPath(ROUTES.INSTALLATION, {})
      },
      {
        title: 'Browser support',
        url: getPath(ROUTES.BROWSERS, {})
      }
    ]
  },
  {
    title: 'Frameworks',
    items: frameworks.map((framework) => ({
      title: framework.title,
      url: getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework: framework.key })
    }))
  },
  {
    title: 'UI Components',
    items: components
      // TODO: detect sub components
      .filter((component) => !!component.readmeContent)
      .map((component) => ({
        title: component.title,
        url: getPath(ROUTES.COMPONENT_DETAILS, { framework, component: component.key })
      }))
  },
  {
    title: 'UI Components API',
    items: components.map((component) => ({
      title: component.title,
      url: getPath(ROUTES.API_DETAILS, { framework, component: component.key })
    }))
  },
  {
    title: 'About',
    items: [
      {
        title: 'Code Of Conduct',
        url: getPath(ROUTES.CODEOFCONDUCT, {})
      }
    ]
  },
  {
    title: 'Features',
    items: [
      {
        title: 'Bidirectionality',
        url: getPath(ROUTES.BIDIRECTIONALITY, {})
      },
      {
        title: 'Global Config',
        url: getPath(ROUTES.GLOBAL_CONFIG, {})
      }
    ]
  },
  {
    title: 'Utils',
    items: [
      {
        title: 'Animations',
        url: getPath(ROUTES.ANIMATIONS, {})
      }
    ]
  }
];
