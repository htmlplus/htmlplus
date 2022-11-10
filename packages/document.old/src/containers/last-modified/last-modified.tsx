import { Grid } from '@app/components';

import { LastModifiedProps } from './last-modified.types';

export const LastModified = ({ value }: LastModifiedProps) => {
  return (
    <>
      <br />
      <Grid justifyContent="between">
        <Grid.Item>Last Modified</Grid.Item>
        <Grid.Item>{new Date(value).toDateString()}</Grid.Item>
      </Grid>
    </>
  );
};
