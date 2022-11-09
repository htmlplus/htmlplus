/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Tabs } from '@htmlplus/react';

const TabsJustify = () => {
  return (
    <>
      <Tabs>
        <Tabs.Bar justify="start">
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.Bar>
      </Tabs>
      <br />
      <Tabs>
        <Tabs.Bar justify="center">
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.Bar>
      </Tabs>
      <br />
      <Tabs>
        <Tabs.Bar justify="end">
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.Bar>
      </Tabs>
    </>
  );
};

const TabsJustifyExample = () => {
  return (
    <div className="ex-tabs-justify">
      <TabsJustify />
      <style>{`undefined`}</style>
    </div>
  )
};

export default TabsJustifyExample;