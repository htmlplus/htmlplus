import { Grid, Markup } from '@app/components';

import { ParameterProps } from './parameter.types';

export const Parameter = ({
  api,
  attribute,
  description,
  detail,
  hasReflect,
  initializer,
  isCancelable,
  isExperimental,
  name,
  returns,
  signature,
  type
}: any) => {
  return (
    <>
      <Grid gutterX="md">
        <Grid.Item xs="12" sm="12" md="6">
          <b>Name</b>
          <div>
            {name}
            {isExperimental && <span> (Experimental)</span>}
          </div>
        </Grid.Item>
        {['event', 'method', 'property'].includes(api) && (
          <>
            <Grid.Item xs="12" sm="6" md="grow">
              {!!(detail ?? returns ?? type) && (
                <>
                  <b>Type</b>
                  <div>{detail ?? returns ?? type}</div>
                </>
              )}
            </Grid.Item>
          </>
        )}
        {['style'].includes(api) && <Grid.Item xs="12" sm="grow" hideSmDown />}
        {['property', 'style'].includes(api) && (
          <>
            <Grid.Item xs="12" sm="auto" hideMdUp>
              <b>Default</b>
              <div>{initializer || 'undefined'}</div>
            </Grid.Item>
            <Grid.Item xs="12" sm="auto" hideSmDown style={{ textAlign: 'right' }}>
              <b>Default</b>
              <div>{initializer || 'undefined'}</div>
            </Grid.Item>
          </>
        )}
        <Grid.Item xs="12" />
        {['event'].includes(api) && (
          <Grid.Item xs="12">
            <b>Cancelable</b>
            <div>{`${!!isCancelable}`}</div>
          </Grid.Item>
        )}
        {['property'].includes(api) && (
          <>
            <Grid.Item xs="12" sm="6">
              <b>Attribute</b>
              <div>{attribute}</div>
            </Grid.Item>
            <Grid.Item xs="12" sm="grow">
              <b>Reflect</b>
              <div>{`${!!hasReflect}`}</div>
            </Grid.Item>
          </>
        )}
        {['method'].includes(api) && (
          <>
            {!!signature && (
              <Grid.Item xs="12">
                <b>Signature</b>
                <Markup value={signature} />
              </Grid.Item>
            )}
          </>
        )}
        {!!description && (
          <Grid.Item xs="12">
            <b>Description</b>
            <Markup value={description} />
          </Grid.Item>
        )}
      </Grid>
    </>
  );
};
