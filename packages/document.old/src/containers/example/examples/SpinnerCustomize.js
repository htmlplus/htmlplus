/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Spinner } from '@htmlplus/react';

const SpinnerCustomize = () => {
  return (
    <div className="center">
      <Spinner type="dual-ring"></Spinner>
    </div>
  );
};

const SpinnerCustomizeExample = () => {
  return (
    <div className="ex-spinner-customize">
      <SpinnerCustomize />
      <style>{`.ex-spinner-customize .center {  text-align: center;}.ex-spinner-customize plus-spinner {  --plus-spinner-size: 5rem;  --plus-spinner-weight: 0.5;  --plus-spinner-color: purple;}`}</style>
    </div>
  )
};

export default SpinnerCustomizeExample;