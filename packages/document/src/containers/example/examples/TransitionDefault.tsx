import { Transition } from "@htmlplus/react";

const TransitionDefault = () => {
  return <div className="transition-default">    
    <div className="center">      
      <Transition name="fade-in" repeat="infinite">
        HTMLPLUS
      </Transition>      
    </div>    
    <style>{".transition-default .center {  text-align: center;}"}</style></div>;
};

export default TransitionDefault;