import { Icon } from "@htmlplus/react";

const IconCustomColor = () => {
  return <>    
    <div className="center">      
      <Icon color="primary">        home</Icon>      
      <Icon color="secondary">        home</Icon>      
      <Icon color="tertiary">        home</Icon>      
    </div>    
  </>;
};

const IconCustomColorExample = () => {
  return (
    <div className="ex-icon-custom-color">
      <IconCustomColor />
      <style>{`.ex-icon-custom-color .center {  text-align: center;}.ex-icon-custom-color plus-icon {  margin: 0 1rem;}.ex-icon-custom-color [color="primary"] {  color: #FF5449;}.ex-icon-custom-color [color="secondary"] {  color: #08DFC8;}.ex-icon-custom-color [color="tertiary"] {  color: #5F9EE9;}`}</style>
    </div>
  )
};

export default IconCustomColorExample;