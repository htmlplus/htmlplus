import { Animation } from "@htmlplus/react";

const AnimationDuration = () => {
  return <div className="ex-animation-duration">    
    <Animation name="fade-in" duration="2500" iterations="Infinity" play></Animation>    
    <style>{".ex-animation-duration plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}"}</style></div>;
};

export default AnimationDuration;