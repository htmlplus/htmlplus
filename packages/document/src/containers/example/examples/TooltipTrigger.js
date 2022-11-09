/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid, Tooltip } from '@htmlplus/react';

const TooltipTrigger = () => {
  return (
    <Grid justifyContent="evenly">
      <Grid.Item>
        <button>
          Hover
          <Tooltip trigger="hover">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item>
        <button>
          Focus
          <Tooltip trigger="focus">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item>
        <button>
          Click
          <Tooltip trigger="click">Tooltip</Tooltip>
        </button>
      </Grid.Item>
    </Grid>
  );
};

const TooltipTriggerExample = () => {
  return (
    <div className="ex-tooltip-trigger">
      <TooltipTrigger />
      <style>{`undefined`}</style>
    </div>
  )
};

export default TooltipTriggerExample;