import { Transition } from "@htmlplus/react";

const TransitionDefault = () => {
  return <>    
    <div className="center">      
      <Transition name="fade-in" repeat="infinite">
        HTMLPLUS
      </Transition>      
    </div>    
  </>;
};

export default TransitionDefault;