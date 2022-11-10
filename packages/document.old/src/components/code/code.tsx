import React, { useEffect, useMemo, useRef } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prism-themes/themes/prism-nord.css';

import { Button, Icon } from '@app/components';

import { CodeProps } from './code.types';

export const Code = ({ children, copy = true, language }: CodeProps) => {
  const element = useRef<HTMLPreElement>(null);

  const content = useMemo(() => children?.toString(), [children]);

  const onClick = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
  }

  useEffect(() => Prism.highlightAllUnder(element.current!), [content, language]);

  return (
    <pre ref={element} className={`language-${language}`} tabIndex={0}>
      <code className={`language-${language}`}>{content}</code>
      {copy && <Button icon onClick={onClick}><Icon>copy</Icon></Button>}
    </pre>
  );
};
