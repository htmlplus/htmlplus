import { Switch } from "@htmlplus/react";

const SwitchInset = () => {
  return <div className="switch-inset">    
    <preview>      
      <Switch inset>        
        <span slot="on">          1</span>        
        <span slot="off">          0</span>        
      </Switch>      
    </preview>    
  </div>;
};

export default SwitchInset;