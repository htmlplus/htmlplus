import { Divider } from "@htmlplus/react";

const DividerWidth = () => {
  return <div className="ex-divider-width">    
    <Divider width="thin"></Divider>    
    <br />    
    <Divider width="medium"></Divider>    
    <br />    
    <Divider width="thick"></Divider>    
  </div>;
};

export default DividerWidth;