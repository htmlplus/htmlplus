import { Alert, Button, Code as CoreCode } from '@app/components';
import { Api, Browsers, Checklist, Example, Examples, Toc, Usage } from '@app/containers';

const Code = ({ children, className }: any) => {
  const language = className?.split('-').pop();
  if (!language) return <code>{children}</code>;
  return <CoreCode language={language}>{children}</CoreCode>;
};

const Heading = (props: any) => {
  const Tag = `h${props.level}` as any;
  if (props.level == 1) return <Tag>{props.children}</Tag>;
  return (
    <Tag>
      <Toc.Item level={props.level}>{props.children}</Toc.Item>
    </Tag>
  );
};
const Pre = ({ children }: any) => {
  return children;
};

export const tokens = {
  Alert,
  Api,
  Browsers,
  Checklist,
  Example,
  Examples,
  Usage: () => <Usage />,
  Playground: () => null,
  a: ({ children, href }: any) => {
    return (
      <Button to={href} link="underline">
        {children}
      </Button>
    );
  },
  code: Code,
  pre: Pre,
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  h4: (props: any) => <Heading level={4} {...props} />,
  h5: (props: any) => <Heading level={5} {...props} />,
  h6: (props: any) => <Heading level={6} {...props} />
};
