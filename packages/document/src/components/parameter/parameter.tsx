import { Button, Code, Grid, Markup } from '@app/components';
import * as Utils from '@app/utils';

export const Parameter = (item: any) => {
  const type = item.detail ?? item.returns ?? item.type;

  // TODO
  const signatureReference = (() => {
    if (!item.signatureReference) return;
    return Utils.getTypeFromGithub(item.component.key, item.signatureReference);
  })();

  const typeReference = (() => {
    let reference = '';
    switch (item.kind) {
      case 'event':
        reference = item.detailReference;
        break;
      case 'method':
        reference = item.returnsReference;
        break;
      case 'property':
        reference = item.typeReference;
        break;
    }
    if (!reference) return;
    return Utils.getTypeFromGithub(item.component.key, reference);
  })();

  return (
    <>
      <Grid gutterX="md">
        <Grid.Item xs="12" sm="12" md="6">
          <b>Name</b>
          <div>
            {item.name}
            {item.isExperimental && <span> (Experimental)</span>}
          </div>
        </Grid.Item>
        {['event', 'method', 'property'].includes(item.kind) && (
          <>
            <Grid.Item xs="12" sm="6" md="grow">
              {!!type && (
                <>
                  <b>Type</b>
                  <div>
                    {!typeReference && <span>{type}</span>}
                    {!!typeReference && (
                      <Button link target="_blank" to={typeReference}>
                        {type}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </Grid.Item>
          </>
        )}
        {['style'].includes(item.kind) && <Grid.Item xs="12" sm="grow" hideSmDown />}
        {['property', 'style'].includes(item.kind) && (
          <>
            <Grid.Item xs="12" sm="auto" hideMdUp>
              <b>Default</b>
              <div>{item.initializer || 'undefined'}</div>
            </Grid.Item>
            <Grid.Item xs="12" sm="auto" hideSmDown style={{ textAlign: 'right' }}>
              <b>Default</b>
              <div>{item.initializer || 'undefined'}</div>
            </Grid.Item>
          </>
        )}
        <Grid.Item xs="12" />
        {['event'].includes(item.kind) && (
          <Grid.Item xs="12">
            <b>Cancelable</b>
            <div>{`${!!item.isCancelable}`}</div>
          </Grid.Item>
        )}
        {['property'].includes(item.kind) && (
          <>
            <Grid.Item xs="12" sm="6">
              <b>Attribute</b>
              <div>{item.attribute}</div>
            </Grid.Item>
            <Grid.Item xs="12" sm="grow">
              <b>Reflect</b>
              <div>{`${!!item.hasReflect}`}</div>
            </Grid.Item>
          </>
        )}
        {['method'].includes(item.kind) && (
          <>
            {!!item.signature && (
              <Grid.Item xs="12">
                <b>Signature</b>
                <div>
                  <Code language="js">{item.signature}</Code>
                </div>
              </Grid.Item>
            )}
          </>
        )}
        {!!item.description && (
          <Grid.Item xs="12">
            <b>Description</b>
            <Markup value={item.description} />
          </Grid.Item>
        )}
      </Grid>
    </>
  );
};
