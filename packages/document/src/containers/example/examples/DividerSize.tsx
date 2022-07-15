import { Divider } from "@htmlplus/react";

const DividerSize = () => {
  return <div className="divider-size">    
    <Divider size="sm"></Divider>    
    <br />    
    <Divider size="md"></Divider>    
    <br />    
    <Divider size="lg"></Divider>    
  </div>;
};

export default DividerSize;