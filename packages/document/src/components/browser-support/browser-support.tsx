import { Grid, Text } from '@app/components';
import { browsers } from '@app/data';
import * as Utils from '@app/utils';

export const BrowserSupport = () => {
  return (
    <div>
      <Text size="4" align="center">
        Full native support
      </Text>
      <Box py={4} />
      <Grid gutterY="lg">
        {browsers.map((browser) => (
          <Grid.Item xs="12" sm="grow" key={browser.key}>
            <Box textAlign="center" minWidth="100px">
              <img width="64" height="64" alt={browser.title} src={Utils.getAsset(browser.logo)} />
              <br />
              <Text size="body" inline>
                {browser.title} {browser.version}
              </Text>
            </Box>
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
};
