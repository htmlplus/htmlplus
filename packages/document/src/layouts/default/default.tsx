import { ReactNode } from 'react';

import { Footer, Grid, Header, Navigation, Sidebar, Sticky, Toc } from '@app/components';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <Header menu />
      <Grid>
        <Grid.Item xs="auto" hideLgDown>
          <Sticky class="menu" top="72">
            <Sidebar />
          </Sticky>
        </Grid.Item>
        <Grid.Item xs="grow">
          <Grid>
            <Grid.Item xs="12" md="grow">
              {/* TODO */}
              <div style={{ padding: '16px', maxWidth: '768px', margin: 'auto', minHeight: 'calc(100vh - 154px)' }}>
                {children}
                <Navigation prev={{ title: 'TODO', url: 'TODO' }} next={{ title: 'TODO', url: 'TODO' }} />
              </div>
            </Grid.Item>
            <Grid.Item xs="12" md="auto" hideMdDown>
              <Sticky top="72">
                {/* TODO */}
                <div style={{ width: '240px' }} />
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
