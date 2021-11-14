import React, { useMemo } from 'react';
import { Code, Button, Icon, PlusCard, PlusDivider, PlusGrid, PlusGridItem, PlusTabs, PlusTabsBar, PlusTabsTab, PlusTabsPanels, PlusTabsPanel } from '@app/components';
import * as Utils from '@app/utils';
import { ExampleLanguage, ExampleProps } from './example.types';

export const Example: React.FC<ExampleProps> = (props) => {

  const { parent, value } = props;

  const code = value.code || {};

  const links = useMemo(() => {

    return (code.links || [])
      .map((link) => {

        const map = {
          codesandbox: 'Edit in CodeSandbox',
          github: 'View on Github',
        }

        return {
          ...link,
          title: map[link.key],
        }
      });
  }, [code.links]);

  const style = useMemo(
    () => {

      if (!code.style) return;

      let rules = code.style;

      let className = `.ex-${value.key} .preview`;

      try { var classLen = className.length, char, nextChar, isAt, isIn; className += ' '; rules = rules.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, ''); rules = rules.replace(/}(\s*)@/g, '}@'); rules = rules.replace(/}(\s*)}/g, '}}'); for (var i = 0; i < rules.length - 2; i++) { char = rules[i]; nextChar = rules[i + 1]; if (char === '@') isAt = true; if (!isAt && char === '{') isIn = true; if (isIn && char === '}') isIn = false; if (!isIn && nextChar !== '@' && nextChar !== '}' && (char === '}' || char === ',' || ((char === '{' || char === ';') && isAt))) { rules = rules.slice(0, i + 1) + className + rules.slice(i + 1); i += classLen; isAt = false; } }; if (rules.indexOf(className) !== 0 && rules.indexOf('@') !== 0) rules = className + rules; return rules; } catch { }
    },
    [value.key, code.style]
  );

  const tabs = useMemo(() => {

    const tabs = [];

    Object.keys(code)
      .filter((key) => key !== 'links')
      .map((key) => {

        const tab: any = {
          key,
          title: Utils.toCapitalCase(key),
          disabled: !code[key]
        };

        if (key === 'preview') {

          tab.content = () => (
            <div className={`ex-${value.key}`}>
              {code[key]()}
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
    <PlusCard className={classes} outlined>
      <PlusTabs value="preview">
        <PlusGrid className="toolbar" alignItems="center" gutterX="sm">
          <PlusGridItem xs="grow">
            <PlusTabsBar>
              {tabs.map((item: any) => (
                <PlusTabsTab key={item.key} disabled={item.disabled} value={item.key}>
                  {item.title}
                </PlusTabsTab>
              ))}
            </PlusTabsBar>
          </PlusGridItem>
          {links.map((link: any) => (
            <PlusGridItem key={link.key}>
              <Button
                text
                to={link.value}
                target="_blank"
                title={link.title}
              >
                <Icon name="github" />
              </Button>
            </PlusGridItem>
          ))}
        </PlusGrid>
        <PlusDivider />
        <PlusTabsPanels className="body">
          {tabs.map((item: any) => (
            <PlusTabsPanel key={item.key} value={item.key}>
              {item.content && <item.content />}
            </PlusTabsPanel>
          ))}
        </PlusTabsPanels>
      </PlusTabs>
    </PlusCard>
  );
};
