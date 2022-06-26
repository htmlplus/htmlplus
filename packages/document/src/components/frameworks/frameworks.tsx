import React from 'react';
import Select, { components } from 'react-select';

import { useRouter } from 'next/router';

import { frameworks } from '@app/data';

const Option = (props: any) => {
  const { Option } = components;
  return (
    <Option {...props}>
      <SingleValue {...props} />
    </Option>
  );
};

const SingleValue = (props: any) => (
  <div>
    {/* TODO */}
    <img
      style={{ width: '1.5rem', height: '1.5rem', objectFit: 'contain', verticalAlign: 'middle', margin: '0' }}
      src={`/assets/logo/${props.data.logo}`}
      alt={`${props.data.title} logo`}
    />
    &nbsp; &nbsp;
    {props.data.title}
  </div>
);

export const Frameworks = () => {
  const router = useRouter();

  const items = frameworks.filter((framework) => !framework.disabled);

  return (
    <>
      <p>Select Your Framework</p>
      <Select options={items} components={{ Option, SingleValue }} />
    </>
  );
};
