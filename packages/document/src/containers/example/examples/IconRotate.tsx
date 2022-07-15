import { Icon } from "@htmlplus/react";

const IconRotate = () => {
  return <div className="icon-rotate">    
    <div className="center">      
      <Icon rotate="0">        home</Icon>      
      <Icon rotate="90">        home</Icon>      
      <Icon rotate="180">        home</Icon>      
      <Icon rotate="270">        home</Icon>      
    </div>    
    <style>{".icon-rotate .center {  text-align: center;}.icon-rotate plus-icon {  margin: 0 1rem;}"}</style></div>;
};

export default IconRotate;