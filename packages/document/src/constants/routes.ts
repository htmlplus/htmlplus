import * as Constants from '@app/constants';

export const ROUTE = {
  HOME: '/',
  INTRODUCTION_WHAT: `/introduction/what-is-${Constants.PLATFORM_KEY}`,
  INTRODUCTION_WHY: `/introduction/why-${Constants.PLATFORM_KEY}`,
  INSTALLATION: '/installation',
  REACT_INSTALLATION: '/react/installation',
  VUE_INSTALLATION: '/vue/installation',
  JAVASCRIPT_INSTALLATION: '/javascript/installation',
  GETTINGSTARTED_BROWSERSUPPORT: '/getting-started/browser-support',
  COMPONENT_DETAILS: '/component/[key]',
  COMPONENT_TRANSITION_PROPERTY_NAME: '/component/transition/names',
  ABOUT_CODEOFCONDUCT: '/code-of-conduct'
};
