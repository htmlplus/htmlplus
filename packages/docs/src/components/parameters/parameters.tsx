import React from 'react';
import {
  Code,
  Markup,
  Text,
  Divider,
  Grid,
  Tooltip,
} from '@app/components';
import * as Utils from '@app/utils';
import { ParametersProps } from './parameters.types';
import { Box } from '../box';

export const Parameters: React.FC<ParametersProps> = (props) => {

  const { items = [] } = props;

  const hasDefault = !!items.filter((item) => typeof item.default !== 'undefined').length;

  const hasType = !!items.filter((item) => typeof item.type !== 'undefined').length;

  const hasValue = !!items.filter((item) => typeof item.value !== 'undefined').length;

  const classes = Utils.classes(
    'parameters'
  );

  return (
    <div className={classes}>
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          <Grid className="item" gutterX="md">
            <Grid.Item xs="grow">
              <Text weight="bold" size="label">Name</Text>
              <Text inline size="body" color="secondary-darken-4">
                {item.name}
              </Text>
              {item.experimental && (
                <Text inline size="caption" color="primary-lighten-3">
                  &nbsp; (Experimental)
                </Text>
              )}
            </Grid.Item>
            <Grid.Item xs="12" sm="6" lg="grow">
              {hasType && <Text weight="bold" size="label">Type</Text>}
              {hasType && (
                <Text size="body" truncate>
                  {/* TODO: see all types */}
                  <span>
                    {item.type}
                    <Tooltip placement="top">{item.type}</Tooltip>
                  </span>
                </Text>
              )}
            </Grid.Item>
            <Grid.Item className="default" xs="12" lg="auto">
              {hasDefault && <Text size="label" weight='bold'>Default</Text>}
              {hasDefault && <Text size="body">{item.default || 'undefined'}</Text>}
            </Grid.Item>
            <Grid.Item xs="12">
              <Box mt={3}></Box>
              {/* TODO */}
              {/* <Text size="label" weight="bold">Description</Text> */}
              <Text size="body" color="main-darken-1">
                <Markup ignoreParagraph>{item.description}</Markup>
                {/* TODO */}
                {(item.values || [])
                  .filter((value) => !!value.description)
                  .map((value) => (
                    <React.Fragment key={value.value}>
                      <br />
                      -&nbsp;
                      <Markup ignoreParagraph>
                        {`\`${value.value}\` ${value.description}`}
                      </Markup>
                    </React.Fragment>
                  ))}
                {/* TODO */}
                {(item.parameters || [])
                  .filter((parameter) => !!parameter.description)
                  .map((parameter) => (
                    <React.Fragment key={parameter.name}>
                      <br />
                      -&nbsp;
                      <Markup ignoreParagraph>
                        {`\`${parameter.name}\` ${parameter.description}`}
                      </Markup>
                    </React.Fragment>
                  ))}
              </Text>
            </Grid.Item>
            {hasValue && (
              <Grid.Item xs="12">
                <Text size="body">Value</Text>
                <Code language="js" copy={false}>{item.value}</Code>
              </Grid.Item>
            )}
          </Grid>
          {items.length > index + 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};
