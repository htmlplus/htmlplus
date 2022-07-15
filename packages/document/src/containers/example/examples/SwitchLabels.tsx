import { Switch } from "@htmlplus/react";

const SwitchLabels = () => {
  return <div className="ex-switch-labels">    
    <preview>      
      <Switch checked>        
        <span slot="on">          Yes</span>        
        <span slot="off">          No</span>        
      </Switch>      
    </preview>    
  </div>;
};

export default SwitchLabels;