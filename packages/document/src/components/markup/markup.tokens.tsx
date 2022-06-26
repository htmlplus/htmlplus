import { Alert, Api, Browsers, Code, Example, Examples, Toc, Usage } from '@app/components';

export const tokens = {
  Alert,
  Api,
  Browsers,
  Example,
  Examples,
  Usage: () => <Usage />,
  Playground: () => null,
  // TODO
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  h4: (props: any) => <Heading level={4} {...props} />,
  h5: (props: any) => <Heading level={5} {...props} />,
  h6: (props: any) => <Heading level={6} {...props} />,
  code: ({ children, className, inline, ...a }: any) => {
    if (inline) return <code>{children}</code>;
    const language = className?.split('-').pop();
    return <Code language={language}>{children}</Code>;
  }
};

// TODO
const Heading = (props: any) => {
  const Tag = `h${props.level}` as any;
  return <Tag>{props.level == 1 ? props.children : <Toc.Item level={props.level}>{props.children}</Toc.Item>}</Tag>;
};
