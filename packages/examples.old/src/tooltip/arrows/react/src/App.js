import { Tooltip } from '@htmlplus/react';

const TooltipArrows = () => {
  return (
    <>
      <button className="btn" xs="12" sm="4">
        Default
        <Tooltip>Tooltip</Tooltip>
      </button>
      <button className="btn" xs="12" sm="4">
        Round
        <Tooltip arrow="round">Tooltip</Tooltip>
      </button>
      <button className="btn" xs="12" sm="4">
        Large
        <Tooltip placement="bottom" arrow="large">
          Tooltip
        </Tooltip>
      </button>
      <button className="btn" xs="12" sm="4">
        Small
        <Tooltip placement="top" arrow="small">
          Tooltip
        </Tooltip>
      </button>
      <button className="btn" xs="12" sm="4">
        Wide
        <Tooltip placement="top" arrow="wide">
          Tooltip
        </Tooltip>
      </button>
      <button className="btn" xs="12" sm="4">
        Narrow
        <Tooltip placement="top" arrow="narrow">
          Tooltip
        </Tooltip>
      </button>
    </>
  );
};

export default TooltipArrows;
