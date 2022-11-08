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

export default TooltipDefault;
