import { Icon } from "@htmlplus/react";

const IconColor = () => {
  return <div className="icon-color">    
    <div className="center">      
      <Icon color="#08DFC8">        home</Icon>      
      <Icon color="#FF5449">        home</Icon>      
      <Icon color="#5F9EE9">        home</Icon>      
      <Icon color="#FFC903">        home</Icon>      
      <Icon color="#9073C1">        home</Icon>      
    </div>    
    <style>{".icon-color .center {  text-align: center;}.icon-color plus-icon {  margin: 0 1rem;}"}</style></div>;
};

export default IconColor;