import { ReactNode } from 'react';

import { Card, Drawer, Grid, Sticky } from '@app/components';
import { Contributors, Frameworks, Header, Navigation, Sidebar, Toc } from '@app/containers';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <Header menu />
      <Drawer open={false} animation="fade" connector="main" temporary>
        <Card tile elevation="10" style={{ height: '100%', overflowY: 'auto' }}>
          HTMLPLUS
          <Sidebar />
        </Card>
      </Drawer>
      <Grid>
        <Grid.Item xs="auto" hideLgDown>
          <Sticky class="menu" top="12">
            {/* TODO */}
            <div style={{ width: '300px' }} />
            <Sidebar />
          </Sticky>
        </Grid.Item>
        <Grid.Item xs="grow">
          <Grid>
            <Grid.Item xs="12" md="grow">
              {/* TODO */}
              <div style={{ padding: '16px', maxWidth: '768px', margin: 'auto', minHeight: 'calc(100vh - 154px)' }}>
                {children}
                <Contributors />
                <br />
                <br />
                <br />
                <Navigation />
              </div>
            </Grid.Item>
            <Grid.Item xs="12" md="auto" hideMdDown>
              <Sticky top="12">
                <Frameworks />
                <Toc />
              </Sticky>
            </Grid.Item>
            {/* TODO */}
            {/* <Grid.Item xs="12">
              <Footer />
            </Grid.Item> */}
          </Grid>
        </Grid.Item>
      </Grid>
    </>
  );
};
