import { ReactNode } from 'react';

import { Footer, Grid, Header, Navigation, Sidebar, Sticky } from '@app/components';
import { sidebar } from '@app/data';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  return (
    <>
      <Header menu />
      <Grid>
        <Grid.Item xs="auto">
          <Sidebar items={sidebar} />
        </Grid.Item>
        <Grid.Item xs="12" md="grow" orderXs="2" orderSm="2" orderMd="1">
          {children}
          <Navigation />
        </Grid.Item>
        <Grid.Item xs="12" md="auto" orderXs="1" orderSm="1" orderMd="2">
          <Sticky top="72">TODO</Sticky>
        </Grid.Item>
      </Grid>
      <Footer />
    </>
  );
};
