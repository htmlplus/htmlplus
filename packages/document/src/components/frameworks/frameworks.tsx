import React from 'react';
import Select, { components } from 'react-select';

import { useRouter } from 'next/router';

import { frameworks } from '@app/data';
import { useStore } from '@app/hooks';
import { getPath } from '@app/utils';

const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <SingleValue {...props} />
    </components.Option>
  );
};

// TODO
const SingleValue = (props: any) => (
  <components.Placeholder {...props}>
    <img
      style={{ width: '1.5rem', height: '1.5rem', objectFit: 'contain', verticalAlign: 'middle', margin: '0' }}
      src={`/assets/logo/${props.data.logo}`}
      alt={`${props.data.label} logo`}
    />
    &nbsp; &nbsp;
    {props.data.label}
  </components.Placeholder>
);

export const Frameworks = () => {
  const router = useRouter();

  const store = useStore();

  const items = frameworks
    .filter((framework) => !framework.disabled)
    .map((framework) => ({
      value: framework.key,
      label: framework.title,
      logo: framework.logo
    }));

  const change = (framework: any) => {
    store.setFramework(framework.value);
    const query = Object.assign({}, router.query, { framework: framework.value });
    const prev = router.asPath;
    const next = getPath(router.route, query);
    if (next == prev) return;
    if (next != router.route) return router.replace(next!);
    if (!frameworks.some((framework) => prev.startsWith(`/${framework.key}`))) return;
    router.replace(`/${framework.value}/` + prev.split('/').slice(2).join('/'));
  };

  return (
    <>
      <p>Select Your Framework</p>
      <Select
        isSearchable={false}
        components={{
          Option,
          SingleValue
        }}
        options={items}
        value={items.find((framework) => framework.value === store.framework)}
        onChange={change}
      />
    </>
  );
};
