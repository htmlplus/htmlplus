/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid, Tooltip } from '@htmlplus/react';

const TooltipPlacement = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="4">
        <button>
          Top
          <Tooltip placement="top">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Top Start
          <Tooltip placement="top-start">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Top End
          <Tooltip placement="top-end">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Right
          <Tooltip placement="right">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Right Start
          <Tooltip placement="right-start">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Right End
          <Tooltip placement="right-end">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Bottom
          <Tooltip placement="bottom">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Bottom Start
          <Tooltip placement="bottom-start">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Bottom End
          <Tooltip placement="bottom-end">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Left
          <Tooltip placement="left">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Left Start
          <Tooltip placement="left-start">Tooltip</Tooltip>
        </button>
      </Grid.Item>
      <Grid.Item xs="12" sm="4">
        <button>
          Left End
          <Tooltip placement="left-end">Tooltip</Tooltip>
        </button>
      </Grid.Item>
    </Grid>
  );
};

const TooltipPlacementExample = () => {
  return (
    <div className="ex-tooltip-placement">
      <TooltipPlacement />
      <style>{`.ex-tooltip-placement button {  display: block;  width: 100%;  padding: 0.5rem;}`}</style>
    </div>
  )
};

export default TooltipPlacementExample;