import * as Case from 'case';
import React from 'react';
import { Button, Text, TocItem } from '@app/components';
import * as Constants from '@app/constants';
import { useStore } from '@app/hooks';
import { observer } from 'mobx-react-lite';

export const Usage: React.FC = observer(() => {

  const store = useStore();

  return (
    <>
      <Text size="2">
        <TocItem>Usage</TocItem>
      </Text>
      <Text size="paragraph">
        Follow the tutorials&nbsp;
        <Button
          color="secondary-darken-4"
          link="underline"
          to={`ROUTE:INSTALLATION:${store.ui.framework.toUpperCase()}`}
        >
          here
        </Button>
        &nbsp; to use the <code>{Constants.PLATFORM_NAME}</code> library on&nbsp;
        <code>{Case.capital(store.ui.framework)}-based</code>
        &nbsp; projects.
      </Text>
    </>
  )
})
