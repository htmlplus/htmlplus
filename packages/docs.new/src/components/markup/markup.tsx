// TODO
import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

// import * as Case from 'case';
// import rehypeRaw from 'rehype-raw';
// import gfm from 'remark-gfm';
// import { Alert, Button, Code, Text, TocItem } from '@app/components';
// import * as components from '@app/components';
// import * as Constants from '@app/constants';
// import { router } from '@app/services';

// let renderers;

// const tokenizer = (input) => {
//   const tokens = input.match(/\{(.*?)\}/g) || [];

//   tokens.map((token) => {
//     const raw = token.replace(/\{|\}/g, '');

//     const sections = raw.split('.');

//     const type = sections[0];

//     const value = sections[1];

//     switch (type) {
//       case 'Constants':
//         input = input.replace(token, Constants[value]);
//         break;

//       case 'Router':
//         input = input.replace(token, router.path(value));
//         break;
//     }
//   });

//   return input;
// };

interface MarkupProps {
  children: ReactNode;
  ignoreParagraph?: boolean;
}

export const Markup = ({ children, ignoreParagraph }: MarkupProps) => {
  const content = children?.toString().replace(/\r\n/g, ' \r\n ') || '';
  return <ReactMarkdown children={content}></ReactMarkdown>;
  // if (!renderers) {
  //   renderers = {};
  //   Object.keys(components).forEach((key) => (renderers['app-' + Case.kebab(key)] = components[key]));
  //   const heading = (props) => {
  //     const { children, level } = props;
  //     const content = level === 1 ? children : <TocItem>{children}</TocItem>;
  //     return <Text size={level.toString()}>{content}</Text>;
  //   };
  //   renderers.h1 = heading;
  //   renderers.h2 = heading;
  //   renderers.h3 = heading;
  //   renderers.h4 = heading;
  //   renderers.h5 = heading;
  //   renderers.h6 = heading;
  //   renderers.blockquote = (props) => {
  //     const { children } = props;
  //     let child = children.find((child) => !child.trim || child.trim());
  //     try {
  //       child = child.props.children[0];
  //     } catch {}
  //     return <Alert>{child}</Alert>;
  //   };
  //   renderers.a = (props) => {
  //     const { children, href } = props;
  //     return (
  //       <Button color="secondary-darken-4" link="underline" to={href}>
  //         {children}
  //       </Button>
  //     );
  //   };
  //   renderers.code = (props) => {
  //     const { children, className, inline } = props;
  //     if (inline) return <code>{children}</code>;
  //     const language = className.split('-').pop();
  //     return <Code language={language}>{children}</Code>;
  //   };
  //   renderers.p = (props) => {
  //     const { children, node } = props;
  //     // TODO
  //     if (node.children.length === 1 && node.children[0].type === 'element') return <>{children}</>;
  //     return <Text size="paragraph">{children}</Text>;
  //   };
  // }
  // let content = children && tokenizer(children.toString().replace(/\r\n/g, ' \r\n '));
  // if (!content) return null;
  // if (ignoreParagraph) renderers.p = (props) => props.children;
  // const codes = content.match(/```[^```]*```/g);
  // content = content
  //   .replace(/<([A-Z]\w+)(.*)\/>/g, (match, name, attribute) => {
  //     name = `app-${Case.kebab(name)}`;
  //     return `<${name}${attribute}></${name}>`;
  //   })
  //   .replace(/<([A-Z]\w+)(.*)>/g, (match, name, attribute) => {
  //     name = `app-${Case.kebab(name)}`;
  //     return `<${name}${attribute}>`;
  //   })
  //   .replace(/<\/([A-Z]\w+)>/g, (match, name) => {
  //     name = `app-${Case.kebab(name)}`;
  //     return `</${name}>`;
  //   })
  //   .replace(/```[^```]*```/g, () => codes.shift());
  // return <ReactMarkdown children={content} components={renderers} rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} />;
};
