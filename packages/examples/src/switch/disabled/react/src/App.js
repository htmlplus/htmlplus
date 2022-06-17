import { Element } from '@htmlplus/element';
import { Switch } from "TODO";

const SwitchDisabled = () => {
  return <>    
    <preview>      
      <Switch checked disabled>        
        <span slot="on">          Yes</span>        
        <span slot="off">          No</span>        
      </Switch>      
    </preview>    
  </>;
};

export default SwitchDisabled;