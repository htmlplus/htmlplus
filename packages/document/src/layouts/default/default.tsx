import { ReactNode } from 'react';

import { Footer, Grid, Header, Navigation, Sticky } from '@app/components';
import { Sidebar } from '@app/containers';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <Header menu />
      <Grid>
        <Grid.Item xs="auto" hideMdDown>
          <Sticky top="72">
            <Sidebar />
          </Sticky>
        </Grid.Item>
        <Grid.Item xs="12" md="grow" orderXs="2" orderSm="2" orderMd="1">
          {children}
          <Navigation prev={{ title: 'TODO', url: 'TODO' }} next={{ title: 'TODO', url: 'TODO' }} />
        </Grid.Item>
        <Grid.Item xs="12" md="auto" orderXs="1" orderSm="1" orderMd="2">
          <Sticky top="72">TODO</Sticky>
        </Grid.Item>
      </Grid>
      <Footer />
    </>
  );
};
