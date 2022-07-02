import { Button, Code, Grid, Icon, Tabs, Toc } from '@app/components';

import { ExampleProps } from './example.types';

export const Example = ({ value }: ExampleProps) => {
  if (!value) return <div>TODO</div>;

  const { links, tabs, title } = value;

  const preview = tabs?.find((tab) => tab.key == 'preview');

  const language = (tab: any) => {
    switch (tab.key) {
      case 'script':
        return 'jsx';
      case 'style':
        return 'css';
      case 'template':
        return 'html';
    }
  };

  return (
    <>
      <h2>
        <Toc.Item level={2}>{title}</Toc.Item>
      </h2>
      {/* TODO: remove connector and example */}
      <Tabs className="example" connector={`example:${title}`} value="preview">
        <Grid className="toolbar" alignItems="center" gutterX="sm">
          <Grid.Item xs="grow">
            <Tabs.Bar>
              {tabs?.map((tab) => (
                <Tabs.Tab key={tab.key} disabled={tab.disabled} value={tab.key}>
                  {tab.title}
                </Tabs.Tab>
              ))}
            </Tabs.Bar>
          </Grid.Item>
          {links?.map((link) => (
            <Grid.Item key={link.key} xs="auto">
              <Button icon text to={link.url} target="_blank">
                <Icon size="lg" name={link.icon} />
              </Button>
            </Grid.Item>
          ))}
        </Grid>
        <Tabs.Panels>
          <Tabs.Panel value="preview">TODO</Tabs.Panel>
          {tabs
            ?.filter((tab) => tab.key != 'preview')
            ?.map((tab) => (
              <Tabs.Panel key={tab.key} value={tab.key}>
                <Code language={language(tab)!}>{tab.content}</Code>
              </Tabs.Panel>
            ))}
        </Tabs.Panels>
      </Tabs>
    </>
  );
};
