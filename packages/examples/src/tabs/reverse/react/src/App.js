import { Tabs } from '@htmlplus/react';

const TabsReverse = () => {
  return (
    <Tabs>
      <Tabs.Bar reverse>
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs.Bar>
    </Tabs>
  );
};

export default TabsReverse;
