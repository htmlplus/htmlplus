import { Switch } from "@htmlplus/react";

const SwitchDisabled = () => {
  return <div className="ex-switch-disabled">    
    <preview>      
      <Switch checked disabled>        
        <span slot="on">          Yes</span>        
        <span slot="off">          No</span>        
      </Switch>      
    </preview>    
  </div>;
};

export default SwitchDisabled;