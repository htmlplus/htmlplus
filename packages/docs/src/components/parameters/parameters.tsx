import React from 'react';
import { Code, Markup, Text, PlusDivider, PlusGrid, PlusGridItem } from '@app/components';
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
          <PlusGrid className="item" gutterX="md">
            <PlusGridItem xs="grow">
              <Text weight="bold" size="label">Name</Text>
              <Text size="body" color="error">{item.name}</Text>
            </PlusGridItem>
            <PlusGridItem xs="12" sm="6" lg="grow">
              {hasType && <Text weight="bold" size="label">Type</Text>}
              {hasType && (
                <Text size="body" truncate>
                  {/* TODO: see all types */}
                  {item.type}
                </Text>
              )}
            </PlusGridItem>
            <PlusGridItem className="default" xs="12" lg="auto">
              {hasDefault && <Text size="label" weight='bold'>Default</Text>}
              {hasDefault && <Text size="body">{item.default || 'undefined'}</Text>}
            </PlusGridItem>
            <PlusGridItem xs="12">
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
            </PlusGridItem>
            {hasValue && (
              <PlusGridItem xs="12">
                <Text size="body">Value</Text>
                <Code language="js" copy={false}>{item.value}</Code>
              </PlusGridItem>
            )}
          </PlusGrid>
          {items.length > index + 1 && <PlusDivider />}
        </React.Fragment>
      ))}
    </div>
  );
};
