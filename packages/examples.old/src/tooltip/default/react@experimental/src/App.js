import '@htmlplus/core/tooltip.js';

const TooltipDefault = () => {
  return (
    <div className="center">
      <button>
        Button
        <plus-tooltip>Tooltip</plus-tooltip>
      </button>
    </div>
  );
};

export default TooltipDefault;
