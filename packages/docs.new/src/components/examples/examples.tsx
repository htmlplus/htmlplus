import React from 'react';
import { Text, TocItem } from '@app/components';

export const Examples: React.FC = () => {
  return (
    <>
      <Text size="2">
        <TocItem>Examples</TocItem>
      </Text>
      <Text size="paragraph">
        Below is a collection of simple to complex examples.
      </Text>
    </>
  )
}
