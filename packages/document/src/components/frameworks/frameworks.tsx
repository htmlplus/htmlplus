import React from 'react';
import Select, { components } from 'react-select';

import { useRouter } from 'next/router';

import { frameworks } from '@app/data';
import { useStore } from '@app/hooks';
import { getPath2 } from '@app/utils';

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

  const store = useStore();

  const items = frameworks.filter((framework) => !framework.disabled);

  const change = (framework: any) => {
    store.setFramework(framework.key);
    const query = Object.assign({}, router.query, { framework: framework.key });
    const prev = router.asPath;
    const next = getPath2(router.route, query);
    if (next === prev) return;
    router.replace(next!);
  };

  return (
    <>
      <p>Select Your Framework</p>
      <Select
        components={{ Option, SingleValue }}
        options={items}
        value={items.find((framework) => framework.key === store.framework)}
        onChange={change}
      />
    </>
  );
};
