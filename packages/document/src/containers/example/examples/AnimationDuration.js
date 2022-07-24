import { Animation } from "@htmlplus/react";

const AnimationDuration = () => {
  return <div className="ex-animation-duration">    
    <div className="center">      
      <Animation name="fade-in" duration="2500" iterations="Infinity" play>
        HTMLPLUS
      </Animation>      
    </div>    
    <style>{".ex-animation-duration .center {  text-align: center;}"}</style></div>;
};

export default AnimationDuration;