import * as CONSTANTS from '@app/constants';

export const ROUTE = {
  HOME: '/',
  ANIMATIONS: '/animations',
  BIDIRECTIONALITY: '/bidirectionality',
  INTRODUCTION_WHAT: `/introduction/what-is-${CONSTANTS.PLATFORM_KEY}`,
  INTRODUCTION_WHY: `/introduction/why-${CONSTANTS.PLATFORM_KEY}`,
  INSTALLATION: '/installation',
  INSTALLATION_FRAMEWORK: '/[framework]/installation',
  BROWSERS: '/browsers',
  VISION: '/vision',
  JAVASCRIPT_INSTALLATION: '/javascript/installation',
  COMPONENT_DETAILS: '/[framework]/component/[component]',
  API_DETAILS: '/[framework]/api/[component]',
  COMPONENT_TRANSITION_PROPERTY_NAME: '/[framework]/component/transition/names',
  CODEOFCONDUCT: '/code-of-conduct',
  CODESANDBOX: '/[framework]/component/[component]/[example]/codesandbox',
  DOWNLOAD: '/[framework]/component/[component]/[example]/download'
} as const;
