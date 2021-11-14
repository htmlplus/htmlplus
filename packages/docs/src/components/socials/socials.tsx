import React from 'react';
import { Button, Icon, PlusGrid, PlusGridItem } from '@app/components';
import * as Constants from '@app/constants';

export const Socials = () => {
  return (
    <PlusGrid alignItems="center" justifyContent="center" wrap="off">
      <PlusGridItem>
        <Button icon text to={Constants.SOCIAL_TWITTER}>
          <Icon name="twitter" />
        </Button>
      </PlusGridItem>
      <PlusGridItem>
        <Button icon text to={Constants.SOCIAL_LINKEDIN}>
          <Icon name="linkedin" />
        </Button>
      </PlusGridItem>
      <PlusGridItem>
        <Button icon text to={Constants.SOCIAL_INSTAGRAM}>
          <Icon name="instagram" />
        </Button>
      </PlusGridItem>
      <PlusGridItem>
        <Button icon text to={Constants.SOCIAL_GITHUB}>
          <Icon name="github" />
        </Button>
      </PlusGridItem>
    </PlusGrid>
  );
};
