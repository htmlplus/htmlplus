import { Spinner } from "@htmlplus/react";

const SpinnerDefault = () => {
  return <div className="ex-spinner-default">    
    <div className="center">      
      <Spinner></Spinner>      
    </div>    
    <style>{".ex-spinner-default .center {  text-align: center;}"}</style></div>;
};

export default SpinnerDefault;