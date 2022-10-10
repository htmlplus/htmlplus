import { useEffect, useMemo } from 'react';
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

const SingleValue = (props: any) => (
  <components.Placeholder {...props}>
    {/* TODO */}
    <img
      style={{ width: '1.25rem', height: '1.25rem', objectFit: 'contain', verticalAlign: 'middle', margin: '0' }}
      src={props.data.logo}
      alt={`${props.data.label} logo`}
    />
    &nbsp;&nbsp;
    {props.data.label}
  </components.Placeholder>
);

export const Frameworks = () => {
  const router = useRouter();

  const store = useStore();

  const items = useMemo(
    () =>
      frameworks.map((framework) => ({
        value: framework.key,
        label: framework.title,
        logo: framework.logo
      })),
    [frameworks]
  );

  const key = useMemo(() => {
    const framework = router.asPath.split('/')?.[1];
    if (!framework) return;
    if (!frameworks.some((framework) => router.asPath.startsWith(`/${framework.key}`))) return;
    if (!framework) return;
    return framework;
  }, [router.asPath]);

  const selected = useMemo(
    () => items.find((framework) => framework.value === store.framework),
    [items, store.framework]
  );

  useEffect(() => {
    if (!key) return;
    store.setFramework(key);
  }, [key]);

  const change = (framework: any) => {
    store.setFramework(framework.value);
    const query = Object.assign({}, router.query, { framework: framework.value });
    const prev = router.asPath;
    const next = getPath(router.route as any, query);
    if (next == prev) return;
    if (next != router.route) return router.replace(next!);
    if (!frameworks.some((framework) => prev.startsWith(`/${framework.key}`))) return;
    router.replace(`/${framework.value}/` + prev.split('/').slice(2).join('/'));
  };

  return (
    <div className="frameworks">
      <p>Select Your Framework</p>
      <Select
        isSearchable={false}
        isDisabled={!key}
        components={{
          Option,
          SingleValue
        }}
        options={items}
        value={selected}
        onChange={change}
      />
    </div>
  );
};
