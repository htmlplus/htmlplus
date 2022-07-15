import { Spinner } from "@htmlplus/react";

const SpinnerDefault = () => {
  return <div className="spinner-default">    
    <div className="center">      
      <Spinner></Spinner>      
    </div>    
    <style>{".spinner-default .center {  text-align: center;}"}</style></div>;
};

export default SpinnerDefault;