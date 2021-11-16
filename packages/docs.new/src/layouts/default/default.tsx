import React from 'react';
import {
  Box,
  Button,
  Card,
  Drawer,
  Footer,
  FrameworkSelector,
  Grid,
  Header,
  Icon,
  Sidebar,
  Sticky,
  Text,
  Toc,
} from '@app/components';
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
    <Grid className={classes}>
      <Grid.Item xs="12">
        <Header menu />
      </Grid.Item>
      <Grid.Item xs="12">
        <Box py={5} />
        {/* TODO */}
        <Drawer open={false} animation="fade" connector="main" temporary>
          <Card tile elevation="10" style={{ height: '100%', overflowY: 'auto' }}>
            <Box p={6}>
              <Text align="center">{Constants.PLATFORM_NAME}</Text>
            </Box>
            <Sidebar items={sidebar} />
          </Card>
        </Drawer>
        <Grid>
          <Grid.Item xs="auto" hideMdDown>
            <Sticky class="menu" top="72" watcher>
              <div className="box scrollbar">
                <Sidebar items={sidebar} />
              </div>
            </Sticky>
          </Grid.Item>
          <Grid.Item xs="12" md="grow" orderXs="2" orderSm="2" orderMd="1">
            <Box px={4} maxWidth={768} mx="auto">
              {children}
              <Box py={6} />
              <Grid justifyContent="between" alignItems="center">
                <Grid.Item xs="auto">
                  {!!prev && (
                    <Button link {...prev.route}>
                      <Grid alignItems="center" gutterX="md" wrap="off">
                        <Grid.Item>
                          <Icon name="prev" />
                        </Grid.Item>
                        <Grid.Item>
                          <Text align="start">
                            <b>Prev</b>
                            <br />
                            {prev.title}
                          </Text>
                        </Grid.Item>
                      </Grid>
                    </Button>
                  )}
                </Grid.Item>
                <Grid.Item xs="auto">
                  {!!next && (
                    <Button link {...next.route}>
                      <Grid alignItems="center" gutterX="md" wrap="off">
                        <Grid.Item>
                          <Text align="end">
                            <b>Next</b>
                            <br />
                            {next.title}
                          </Text>
                        </Grid.Item>
                        <Grid.Item>
                          <Icon name="next" />
                        </Grid.Item>
                      </Grid>
                    </Button>
                  )}
                </Grid.Item>
              </Grid>
            </Box>
          </Grid.Item>
          <Grid.Item xs="12" md="auto" orderXs="1" orderSm="1" orderMd="2">
            <Sticky top="72">
              <Box px={4} pb={3}>
                <FrameworkSelector />
                <Box pb={6} />
                <Toc />
              </Box>
            </Sticky>
          </Grid.Item>
        </Grid>
      </Grid.Item>
      <Grid.Item xs="12">
        <Footer />
      </Grid.Item>
    </Grid>
  );
};
