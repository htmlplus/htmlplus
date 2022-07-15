import { Spinner } from "@htmlplus/react";

const SpinnerCustomize = () => {
  return <div className="spinner-customize">    
    <div className="center">      
      <Spinner type="dual-ring"></Spinner>      
    </div>    
    <style>{".spinner-customize .center {  text-align: center;}.spinner-customize plus-spinner {  --plus-spinner-size: 5rem;  --plus-spinner-weight: 0.5;  --plus-spinner-color: purple;}"}</style></div>;
};

export default SpinnerCustomize;