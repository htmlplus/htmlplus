import { Tabs } from "@htmlplus/react";

const TabsGrow = () => {
  return <div className="ex-tabs-grow">    
    <Tabs>      
      <Tabs.Bar grow>        
        <Tabs.Tab>
          Tab 1
        </Tabs.Tab>        
        <Tabs.Tab>
          Tab 2
        </Tabs.Tab>        
        <Tabs.Tab>
          Tab 3
        </Tabs.Tab>        
      </Tabs.Bar>      
    </Tabs>    
  </div>;
};

export default TabsGrow;