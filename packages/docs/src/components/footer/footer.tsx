import React from 'react';
import { Box, Socials, Text } from '@app/components';
import * as Constants from '@app/constants';
import * as Utils from '@app/utils';

export const Footer = () => {

  const items = [
    {
      title: Constants.PLATFORM_ABBREVIATION,
      items: [
        {
          label: 'Team',
          path: '#'
        },
        {
          label: 'Jobs',
          path: '#'
        }
      ]
    },
    {
      title: 'Community',
      items: [
        {
          label: 'Github',
          path: '#'
        },
        {
          label: 'Stack Overflow',
          path: '#'
        },
        {
          label: 'Blog',
          path: '#'
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          label: 'Support',
          path: '#'
        },
        {
          label: 'Resources',
          path: '#'
        },
        {
          label: 'Newsletter',
          path: '#'
        }
      ]
    },
    {
      title: 'Contact',
      items: [
        {
          label: 'Common Questions',
          path: '#'
        },
        {
          label: 'Report a bug',
          path: '#'
        },
        {
          label: 'Request a component',
          path: '#'
        }
      ]
    }
  ]

  const classes = Utils.classes(
    'footer'
  );

  return (
    <div className={classes}>
      <Box mb={12} mt={12}>
        <Socials />
      </Box>
      <Text align="center" size="label">
        &copy; 2020 {Constants.PLATFORM_NAME}. Released under MIT License.
      </Text>
    </div>
  );
};
