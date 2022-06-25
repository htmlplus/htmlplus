import { Alert, Api, Browsers, Example, Examples, Toc, Usage } from '@app/components';

export const tokens = {
  Alert,
  Api,
  Browsers,
  Example,
  Examples,
  Usage: () => <Usage />,
  Playground: () => null,
  // TODO
  h1: (props: any) => <H level={1} {...props} />,
  h2: (props: any) => <H level={2} {...props} />,
  h3: (props: any) => <H level={3} {...props} />,
  h4: (props: any) => <H level={4} {...props} />,
  h5: (props: any) => <H level={5} {...props} />,
  h6: (props: any) => <H level={6} {...props} />
};

// TODO
const H = (props: any) => {
  const Tag = `h${props.level}` as any;
  return (
    <Tag>
      <Toc.Item level={props.level}>{props.children}</Toc.Item>
    </Tag>
  );
};
