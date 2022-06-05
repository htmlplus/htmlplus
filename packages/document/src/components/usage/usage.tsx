import React from 'react';

import { Button, Text } from '@app/components';
import * as Constants from '@app/constants';

export const Usage = () => {
  return (
    <>
      <Text size="2">Usage</Text>
      <Text size="paragraph">
        Follow the tutorials&nbsp;
        <Button color="secondary-darken-4" link="underline" to={`ROUTE:INSTALLATION:TODO`}>
          here
        </Button>
        &nbsp; to use the <code>{Constants.PLATFORM_NAME}</code> library on&nbsp;
        <code>TODO-based</code>
        &nbsp; projects.
      </Text>
    </>
  );
};
