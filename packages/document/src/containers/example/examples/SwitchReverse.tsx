import { Switch } from "@htmlplus/react";

const SwitchReverse = () => {
  return <div className="ex-switch-reverse">    
    <preview>      
      <Switch reverse>        
        <span slot="on">          Yes</span>        
        <span slot="off">          No</span>        
      </Switch>      
    </preview>    
  </div>;
};

export default SwitchReverse;