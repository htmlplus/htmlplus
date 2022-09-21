import React, { useEffect, useMemo, useRef } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prism-themes/themes/prism-nord.css';

import { CodeProps } from './code.types';

export const Code = ({ children, copy = true, language }: CodeProps) => {
  const element = useRef(null);
  const content = useMemo(() => children?.toString() || '', [children]);
  useEffect(() => Prism.highlightAllUnder(element.current!), [content, language]);
  return (
    <pre ref={element} className={`language-${language}${copy ? ' copy' : ''}`} tabIndex={0}>
      <code className={`language-${language}`}>{content}</code>
    </pre>
  );
};
