import { ROUTES, getPath } from '@app/utils';

export const socials = [
  {
    key: 'twitter',
    icon: 'twitter',
    title: 'Twitter',
    url: getPath(ROUTES.SOCIAL_TWITTER, {})
  },
  {
    key: 'linkedin',
    icon: 'linkedin',
    title: 'Linkedin',
    url: getPath(ROUTES.SOCIAL_LINKEDIN, {})
  },
  {
    key: 'instagram',
    icon: 'instagram',
    title: 'Instagram',
    url: getPath(ROUTES.SOCIAL_INSTAGRAM, {})
  },
  {
    key: 'github',
    icon: 'github',
    title: 'Github',
    url: getPath(ROUTES.SOCIAL_GITHUB, {})
  },
  {
    key: 'youtube',
    icon: 'youtube',
    title: 'YouTube',
    url: getPath(ROUTES.SOCIAL_YOUTUBE, {})
  }
];
