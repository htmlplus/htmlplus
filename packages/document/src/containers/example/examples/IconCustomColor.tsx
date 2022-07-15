import { Icon } from "@htmlplus/react";

const IconCustomColor = () => {
  return <div className="icon-custom-color">    
    <div className="center">      
      <Icon color="primary">        home</Icon>      
      <Icon color="secondary">        home</Icon>      
      <Icon color="tertiary">        home</Icon>      
    </div>    
    <style>{".icon-custom-color .center {  text-align: center;}.icon-custom-color plus-icon {  margin: 0 1rem;}.icon-custom-color [color=\"primary\"] {  color: #FF5449;}.icon-custom-color [color=\"secondary\"] {  color: #08DFC8;}.icon-custom-color [color=\"tertiary\"] {  color: #5F9EE9;}"}</style></div>;
};

export default IconCustomColor;