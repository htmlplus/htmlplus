import { Animation } from "@htmlplus/react";

const AnimationDefault = () => {
  return <>    
    <div className="center">      
      <Animation name="fade-in" iterations="Infinity" play>
        HTMLPLUS
      </Animation>      
    </div>    
  </>;
};

export default AnimationDefault;