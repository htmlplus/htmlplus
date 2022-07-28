import { Divider } from "@htmlplus/react";

const DividerWidth = () => {
  return <div className="ex-divider-width">    
    <Divider size="thin"></Divider>    
    <br />    
    <Divider size="medium"></Divider>    
    <br />    
    <Divider size="thick"></Divider>    
  </div>;
};

export default DividerWidth;