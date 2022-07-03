import React, { useEffect, useMemo, useRef } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prism-themes/themes/prism-nord.css';

import { CodeProps } from './code.types';

export const Code = ({ children, language }: CodeProps) => {
  const element = useRef(null);
  const content = useMemo(() => children?.toString() || '', [children]);
  useEffect(() => Prism.highlightAllUnder(element.current!), [content, language]);
  return (
    <pre ref={element} className={`language-${language}`} tabIndex={0}>
      <code className={`language-${language}`}>{content}</code>
    </pre>
  );
};
