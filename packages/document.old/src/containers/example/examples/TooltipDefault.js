/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Tooltip } from '@htmlplus/react';

const TooltipDefault = () => {
  return (
    <div className="center">
      <button>
        Button
        <Tooltip>Tooltip</Tooltip>
      </button>
    </div>
  );
};

const TooltipDefaultExample = () => {
  return (
    <div className="ex-tooltip-default">
      <TooltipDefault />
      <style>{`.ex-tooltip-default .center {  text-align: center;}`}</style>
    </div>
  )
};

export default TooltipDefaultExample;