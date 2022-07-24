import { Animation } from "@htmlplus/react";

const AnimationDuration = () => {
  return <>    
    <div className="center">      
      <Animation name="fade-in" duration="2500" iterations="Infinity" play>
        HTMLPLUS
      </Animation>      
    </div>    
  </>;
};

export default AnimationDuration;