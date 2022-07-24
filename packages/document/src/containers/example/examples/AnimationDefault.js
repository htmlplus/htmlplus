import { Animation } from "@htmlplus/react";

const AnimationDefault = () => {
  return <div className="ex-animation-default">    
    <div className="center">      
      <Animation name="fade-in" iterations="Infinity" play>
        HTMLPLUS
      </Animation>      
    </div>    
    <style>{".ex-animation-default .center {  text-align: center;}"}</style></div>;
};

export default AnimationDefault;