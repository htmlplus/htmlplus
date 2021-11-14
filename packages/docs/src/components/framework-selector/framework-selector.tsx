import React from 'react';
import { observer } from 'mobx-react-lite';
import Select, { components } from 'react-select'
import { Box, PlusGrid, PlusGridItem, Text } from '@app/components';
import { frameworks } from '@app/data';
import { useRouter, useStore } from '@app/hooks';

const Option = (props) => {

  const { Option } = components;

  return (
    <Option {...props}>
      <SingleValue {...props} />
    </Option>
  )
}

const SingleValue = (props) => (
  <PlusGrid alignItems="center" gutterX="sm" wrap="off">
    <PlusGridItem>
      {/* TODO */}
      <img
        style={{ width: '1.5rem', height: '1.5rem', objectFit: 'contain', display: 'block' }}
        src={`/assets/logo/${props.data.logo}`}
        alt={`${props.data.label} logo`}
      />
    </PlusGridItem>
    <PlusGridItem>
      <Text>
        {props.data.label}
      </Text>
    </PlusGridItem>
  </PlusGrid>
)

export const FrameworkSelector: React.FC<any> = observer(() => {

  const router = useRouter();

  const store = useStore();

  const items = frameworks
    .filter((framework) => !framework.disabled)
    .map((framework) => ({
      value: framework.key,
      label: framework.title,
      logo: framework.logo,
    }));

  const change = (framework: any) => {

    store.ui.setFramework(framework.value);

    router.replace(router.asPath);
  }

  return (
    <>
      <Box mb={3}>
        <Text color="main-lighten-1" size="caption">
          SELECT YOUR FRAMEWORK
        </Text>
      </Box>
      <Select
        options={items}
        value={items.find((framework) => framework.value === store.ui.framework)}
        components={{ Option, SingleValue }}
        onChange={change}
      />
    </>
  );
});
