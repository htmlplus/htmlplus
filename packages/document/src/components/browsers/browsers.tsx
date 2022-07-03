import { Grid } from '@app/components';
import { browsers } from '@app/data';
import * as Utils from '@app/utils';

export const Browsers = () => {
  return (
    <Grid gutterY="lg">
      {browsers.map((browser) => (
        <Grid.Item xs="12" sm="grow" key={browser.key}>
          {/* TODO */}
          <div style={{ textAlign: 'center', minWidth: 100 }}>
            <img width="64" height="64" alt={browser.title} src={`/assets/browsers/${browser.logo}`} />
            <br />
            <p>
              {browser.title} {browser.version}
            </p>
          </div>
        </Grid.Item>
      ))}
    </Grid>
  );
};
