import { ReactNode, useMemo } from 'react';

import { useRouter } from 'next/router';

import { Card, Drawer, Frameworks, Grid, Header, Navigation, Sidebar, Sticky, Toc } from '@app/components';
import * as Constants from '@app/constants';
import { sidebar } from '@app/data';
import { useStore } from '@app/hooks';

interface LayoutDefaultProps {
  children: ReactNode;
}

export const LayoutDefault = ({ children }: LayoutDefaultProps) => {
  const router = useRouter();

  const store = useStore();

  const [prev, current, next] = useMemo(() => {
    const items = sidebar(store.framework!)
      .map((item) => item?.items?.map((sub) => ({ ...sub, category: item.title })))
      .flat()
      .filter((item) => !!item?.url);
    const index = items.findIndex((item) => router.asPath.startsWith(item?.url!));
    return items.slice(index - 1, index + 3);
  }, [router.asPath, store.framework]);

  return (
    <>
      <Header menu />
      <Drawer open={false} animation="fade" connector="main" temporary>
        <Card tile elevation="10" style={{ height: '100%', overflowY: 'auto' }}>
          {Constants.PLATFORM_NAME}
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
                <Navigation prev={prev!} next={next!} />
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
