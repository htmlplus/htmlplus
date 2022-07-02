import { Switch } from "@htmlplus/react";

const SwitchReverse = () => {
  return <>    
    <preview>      
      <Switch reverse>        
        <span slot="on">          Yes</span>        
        <span slot="off">          No</span>        
      </Switch>      
    </preview>    
  </>;
};

export default SwitchReverse;