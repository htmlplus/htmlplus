import { Animation } from "@htmlplus/react";

const AnimationDefault = () => {
  return <div className="ex-animation-default">    
    <Animation name="fade-in" iterations="Infinity" play></Animation>    
    <style>{".ex-animation-default plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}"}</style></div>;
};

export default AnimationDefault;