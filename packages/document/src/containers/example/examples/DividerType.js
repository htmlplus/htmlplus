import { Divider } from "@htmlplus/react";

const DividerType = () => {
  return <div className="ex-divider-type">    
    <Divider type="solid"></Divider>    
    <br />    
    <Divider type="dashed"></Divider>    
    <br />    
    <Divider type="dotted"></Divider>    
  </div>;
};

export default DividerType;