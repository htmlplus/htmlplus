import { Divider } from "@htmlplus/react";

const DividerPlacement = () => {
  return <div className="ex-divider-placement">    
    <Divider placement="center">      Center</Divider>    
    <br />    
    <Divider placement="start">      Start</Divider>    
    <br />    
    <Divider placement="end">      End</Divider>    
  </div>;
};

export default DividerPlacement;