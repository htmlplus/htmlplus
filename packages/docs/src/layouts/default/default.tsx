import React from 'react';
import { Box, Button, Footer, FrameworkSelector, Header, Icon, PlusCard, PlusDivider, PlusDrawer, PlusGrid, PlusGridItem, PlusLayout, PlusSticky, Sidebar, Text, Toc } from '@app/components';
import * as Constants from '@app/constants';
import { sidebar } from '@app/data';
import { useRouter } from '@app/hooks';
import * as Utils from '@app/utils';

export const LayoutDefault: React.FC = (props) => {

  const { children } = props;

  const router = useRouter();

  const all: Array<any> = sidebar
    .map((item) => {
      if (!item.items) return null;

      return (item.items || []).map((subItem) => ({
        ...subItem,
        category: item.title,
      }));
    })
    .flat();

  const index = all
    .filter((item) => item && item.route)
    .findIndex((item) => router.isActive(item.route.to, item.route.params));

  const next = all[index + 1];

  const prev = all[index - 1];

  const classes = Utils.classes('layout-default');

  return (
    <PlusLayout className={classes}>
      <div slot="header">
        <Header menu />
      </div>
      {/* TODO */}
      <PlusDrawer slot="aside:start" open={false} class="fade" connector="main" temporary>
        <PlusCard tile elevation="10" style={{ height: '100%', overflowY: 'auto' }}>
          <Box p={6}>
            <Text align="center">{Constants.PLATFORM_NAME}</Text>
          </Box>
          <Sidebar items={sidebar} />
        </PlusCard>
      </PlusDrawer>
      {/* TODO */}
      <PlusSticky class="menu" slot="aside:start" top="0" watcher>
        <PlusGrid>
          <PlusGridItem xs="auto" hideMdDown>
            <div className="box scrollbar">
              <Sidebar items={sidebar} />
            </div>
          </PlusGridItem>
          <PlusDivider vertical />
        </PlusGrid>
      </PlusSticky>
      <PlusGrid>
        <PlusGridItem xs="12" md="grow" orderXs="2" orderSm="2" orderMd="1">
          <Box px={4} maxWidth={768} mx="auto">
            {children}
            <Box py={6} />
            <PlusGrid justifyContent="between" alignItems="center">
              <PlusGridItem xs="auto">
                {!!prev && (
                  <Button link {...prev.route}>
                    <PlusGrid alignItems="center" gutterX="md" wrap="off">
                      <PlusGridItem>
                        <Icon name="prev" />
                      </PlusGridItem>
                      <PlusGridItem>
                        <Text align="start">
                          <b>Prev</b>
                          <br />
                          {prev.title}
                        </Text>
                      </PlusGridItem>
                    </PlusGrid>
                  </Button>
                )}
              </PlusGridItem>
              <PlusGridItem xs="auto">
                {!!next && (
                  <Button link {...next.route}>
                    <PlusGrid alignItems="center" gutterX="md" wrap="off">
                      <PlusGridItem>
                        <Text align="end">
                          <b>Next</b>
                          <br />
                          {next.title}
                        </Text>
                      </PlusGridItem>
                      <PlusGridItem>
                        <Icon name="next" />
                      </PlusGridItem>
                    </PlusGrid>
                  </Button>
                )}
              </PlusGridItem>
            </PlusGrid>
          </Box>
        </PlusGridItem>
        <PlusGridItem xs="12" md="auto" orderXs="1" orderSm="1" orderMd="2">
          <PlusSticky top="24">
            <Box px={4} pb={3}>
              <FrameworkSelector />
              <Box pb={6} />
              <Toc />
            </Box>
          </PlusSticky>
        </PlusGridItem>
      </PlusGrid>
      <div slot="footer">
        <Footer />
      </div>
    </PlusLayout>
  );
};
