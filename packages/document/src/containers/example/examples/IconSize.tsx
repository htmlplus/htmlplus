import { Icon } from "@htmlplus/react";

const IconSize = () => {
  return <div className="icon-size">    
    <div className="center">      
      <Icon size="1x">        home</Icon>      
      <Icon size="2x">        home</Icon>      
      <Icon size="3x">        home</Icon>      
    </div>    
    <style>{".icon-size .center {  text-align: center;}.icon-size plus-icon {  margin: 0 1rem;  vertical-align: middle;}"}</style></div>;
};

export default IconSize;