import { Transition } from "@htmlplus/react";

const TransitionDefault = () => {
  return <div className="ex-transition-default">    
    <div className="center">      
      <Transition name="fade-in" repeat="infinite">
        HTMLPLUS
      </Transition>      
    </div>    
    <style>{".ex-transition-default .center {  text-align: center;}"}</style></div>;
};

export default TransitionDefault;