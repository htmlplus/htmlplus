import { Tabs } from '@htmlplus/react';

const TabsVertical = () => {
  return (
    <Tabs value="1" vertical>
      <Tabs.Bar>
        <Tabs.Tab value="1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="3">Tab 3</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Panels>
        <Tabs.Panel value="1">
          <b>Tab One</b>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit
          amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet
          posuere lacus, gravida semper libero. Praesent sed nisi sed lorem
          posuere consequat.
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <b>Tab Two</b>
          <br />
          Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet.
          Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum,
          pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et
          gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus
          vestibulum.
        </Tabs.Panel>
        <Tabs.Panel value="3">
          <b>Tab Three</b>
          <br />
          Integer facilisis tincidunt urna vel accumsan. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export default TabsVertical;
