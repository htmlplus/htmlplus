import * as Case from 'case';
import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Box,
  Button,
  Card,
  Code,
  Dialog,
  Divider,
  Grid,
  Icon,
  Tabs,
  Tooltip,
} from '@app/components';
import { components } from '@app/data';
import { useRouter, useStore } from '@app/hooks';
import * as Utils from '@app/utils';
import examples from '@htmlplus/examples';
import { ExampleLanguage, ExampleProps } from './example.types';

export const Example: React.FC<ExampleProps> = observer((props) => {

  const { value: exampleKey } = props;

  const router = useRouter();

  const store = useStore();

  const componentKey = router.query.key;

  const component = useMemo(() => {
    return components.find((component) => component.key === componentKey);
  }, [components, componentKey]);

  if (!component) return null;

  const primary = useMemo(() => {

    const { examples } = component;

    return examples.find((example) => example.key === exampleKey);

  }, [component, exampleKey]);

  if (!primary) return null;

  const secondary = useMemo(() => {
    try {
      return examples
        .find((example) => example.key === component.key)
        .examples
        .find((example) => example.key === exampleKey);
    }
    catch { }
  }, [component, examples, exampleKey]);

  if (!secondary) return null;

  const example = useMemo(() => {

    const merge = Object.assign({}, primary, secondary);

    const clone = JSON.parse(JSON.stringify(merge));

    clone.ports.preview = secondary.ports.preview;

    return clone;

  }, [primary, secondary]);

  if (!example) return null;

  const code: any = useMemo(() => {

    const preview = example.ports.preview.script;

    const port = example.ports[store.ui.framework];

    return {
      preview,
      ...port,
    }

  }, [example, store.ui.framework]);

  const codesandbox = useMemo(() => {

    if (!example.codesandboxes) return;

    const codesandbox = example.codesandboxes.find((codesandbox) => codesandbox.port === store.ui.framework);

    if (!example.codesandboxes) return;

    return codesandbox;

  }, [code, store.ui.framework]);

  const style = useMemo(() => {

    if (!code.style) return;

    let rules = code.style;

    let className = `.ex-${exampleKey} .preview`;

    try { var classLen = className.length, char, nextChar, isAt, isIn; className += ' '; rules = rules.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, ''); rules = rules.replace(/}(\s*)@/g, '}@'); rules = rules.replace(/}(\s*)}/g, '}}'); for (var i = 0; i < rules.length - 2; i++) { char = rules[i]; nextChar = rules[i + 1]; if (char === '@') isAt = true; if (!isAt && char === '{') isIn = true; if (isIn && char === '}') isIn = false; if (!isIn && nextChar !== '@' && nextChar !== '}' && (char === '}' || char === ',' || ((char === '{' || char === ';') && isAt))) { rules = rules.slice(0, i + 1) + className + rules.slice(i + 1); i += classLen; isAt = false; } }; if (rules.indexOf(className) !== 0 && rules.indexOf('@') !== 0) rules = className + rules; return rules; } catch { }

  }, [code, exampleKey]);

  const tabs = useMemo(() => {

    const tabs = [];

    Object.keys(code)
      .map((key) => {

        const tab: any = {
          key,
          title: Case.capital(key),
          disabled: !code[key]
        };

        if (key === 'preview') {

          const Component = code[key];

          tab.content = () => (
            <div className={`ex-${exampleKey}`}>
              {typeof window !== 'undefined' && <Component />}
              {style && <style>{style}</style>}
            </div>
          )
        }
        else {

          const language = ExampleLanguage[key as keyof typeof ExampleLanguage];

          tab.content = () => <Code flat language={language}>{code[key]}</Code>
        }

        tabs.push(tab);
      });

    return tabs;
  }, [code]);

  const classes = Utils.classes(
    'example'
  );

  return (
    <>
      <Card className={classes} outlined>
        <Tabs value="preview">
          <Grid className="toolbar" alignItems="center" gutterX="sm">
            <Grid.Item xs="grow">
              <Tabs.Bar>
                {tabs.map((item: any) => (
                  <Tabs.Tab key={item.key} disabled={item.disabled} value={item.key}>
                    {item.title}
                  </Tabs.Tab>
                ))}
              </Tabs.Bar>
            </Grid.Item>
            {/* <Download code={code} framework={store.ui.framework} value={example} /> */}
            {codesandbox && (
              <Grid.Item key={codesandbox.url}>
                <Button
                  icon
                  text
                  to={codesandbox.url}
                  target="_blank"
                >
                  <Icon size="lg">sandbox</Icon>
                  <Tooltip>Edit on CodeSandbox</Tooltip>
                </Button>
              </Grid.Item>
            )}
          </Grid>
          <Divider />
          <Tabs.Panels className="body">
            {tabs.map((item: any) => (
              <Tabs.Panel key={item.key} value={item.key}>
                {item.content && <item.content />}
              </Tabs.Panel>
            ))}
          </Tabs.Panels>
        </Tabs>
      </Card>
      <Box py={4} />
    </>
  )
})

// TODO
// const Download = (props) => {

//   const { code, framework, value } = props;

//   if (framework === 'react') return null;

//   const connector = `dialog-download-${value.key}`;

//   const content = useMemo(() => {

//     const lines = [];

//     if (framework === 'vue') {

//       if (code.template) {
//         lines.push('<template>');
//         lines.push(code.template);
//         lines.push('</template>');
//         lines.push('');
//       }

//       if (code.script) {
//         lines.push('<script>');
//         lines.push(code.script);
//         lines.push('</script>');
//         lines.push('');
//       }

//       if (code.style) {
//         lines.push('<style>');
//         lines.push(code.style);
//         lines.push('</style>');
//         lines.push('');
//       }
//     }
//     else if (framework === 'javascript') {

//       lines.push('<!DOCTYPE html>');
//       lines.push('<html>');
//       lines.push('  <head>');
//       lines.push('    <title>HTMLPLUS in JavaScript</title>');
//       lines.push('    <meta name="viewport" content="width=device-width, initial-scale=1.0">');
//       lines.push('    <script type="module" src="https://cdn.jsdelivr.net/npm/@htmlplus/core/dist/esm/htmlplus.js"></script>');

//       if (code.style) {
//         lines.push('    <style>');
//         lines.push(code.style.split('\n').map((section) => `      ${section}`).join('\n'));
//         lines.push('    </style>');
//       }

//       lines.push('  </head>');
//       lines.push('  <body>');

//       if (code.template) {
//         lines.push(code.template.split('\n').map((section) => `    ${section}`).join('\n'));
//       }

//       if (code.script) {
//         lines.push('    <script>');
//         lines.push(code.script.split('\n').map((section) => `      ${section}`).join('\n'));
//         lines.push('    </script>');
//       }

//       lines.push('  </body>');
//       lines.push('</html>');
//     }

//     return lines.join('\n');
//   }, []);

//   const fileName = useMemo(() => {

//     if (framework === 'vue') return `${value.title}.vue`;

//     if (framework === 'javascript') return `${value.title}.html`;
//   }, [framework, value]);

//   const onClick = () => Utils.download(content, 'application/text', fileName);

//   return (
//     <Grid.Item>
//       <Dialog.Toggler connector={connector}>
//         <Button text>
//           Download
//         </Button>
//       </Dialog.Toggler>
//       <Dialog
//         animation="fade"
//         connector={connector}
//         placement="center"
//         size="lg"
//       >
//         <Dialog.Content>
//           <Dialog.Header>
//             {value.title}
//           </Dialog.Header>
//           <Dialog.Body>
//             <Code flat language="html">{content}</Code>
//           </Dialog.Body>
//           <Dialog.Footer>
//             <Button onClick={onClick}>
//               Download
//             </Button>
//           </Dialog.Footer>
//         </Dialog.Content>
//       </Dialog>
//     </Grid.Item>
//   )
// }
