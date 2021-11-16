import React from 'react';
import { observer } from 'mobx-react-lite';
import Select, { components } from 'react-select'
import { Box, Grid, Text } from '@app/components';
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
  <Grid alignItems="center" gutterX="sm" wrap="off">
    <Grid.Item>
      {/* TODO */}
      <img
        style={{ width: '1.5rem', height: '1.5rem', objectFit: 'contain', display: 'block' }}
        src={`/assets/logo/${props.data.logo}`}
        alt={`${props.data.label} logo`}
      />
    </Grid.Item>
    <Grid.Item>
      <Text>
        {props.data.label}
      </Text>
    </Grid.Item>
  </Grid>
)

export const FrameworkSelector: React.FC = observer(() => {

  const router = useRouter();

  const store = useStore();

  if (!router.asPath.startsWith('/component')) return null;

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
  )
})
