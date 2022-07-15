import { Icon } from "@htmlplus/react";

const IconFlip = () => {
  return <div className="icon-flip">    
    <div className="center">      
      <Icon>        home</Icon>      
      <Icon flip="horizontal">        home</Icon>      
      <Icon flip="vertical">        home</Icon>      
      <Icon flip="both">        home</Icon>      
    </div>    
    <style>{".icon-flip .center {  text-align: center;}.icon-flip plus-icon {  margin: 0 1rem;}"}</style></div>;
};

export default IconFlip;