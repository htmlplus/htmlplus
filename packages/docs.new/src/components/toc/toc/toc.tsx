import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Text } from '@app/components';
import { useStore } from '@app/hooks';
import * as Utils from '@app/utils';
import { TocProps } from './toc.types';

export const Toc: React.FC<TocProps> = observer(() => {

  const store = useStore();

  const items = store.toc.items;

  const classes = Utils.classes(
    'toc'
  );

  return (
    <div className={classes}>
      {!!items.length && (
        <>
          <Box mb={3}>
            <Text color="main-lighten-1" size="caption">
              CONTENTS
            </Text>
          </Box>
          <div className="body">
            {items.map((item) => (
              <div
                key={item.key}
                className={Utils.classes({
                  ['active']: item.active,
                  [`level-${item.level || 0}`]: true
                })}
                onClick={() => item.scrollTo()}
              >
                <Text color="main" size="label">
                  {item.value}
                </Text>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
});
