import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import { Button, Icon } from '@app/components';
import * as Utils from '@app/utils';
import { CodeProps } from './code.types';
// import 'prismjs/themes/prism-funky.css';

export const Code: React.FC<CodeProps> = (props) => {

  const { children, copy = true, flat, language } = props;

  const element = useRef(null);

  const content = (children || '').toString();

  useEffect(() => Prism.highlightAllUnder(element.current));

  const classes = Utils.classes(
    'code',
    { flat }
  );

  return (
    <div ref={element} className={classes}>
      {copy && (
        <Button color="main-lighten-5" icon text onClick={() => Utils.copyToClipboard(content)}>
          <Icon name="copy" />
        </Button>
      )}
      <pre className="scrollbar">
        {/* TODO */}
        <code className={`${process.browser ? ' ' : ''}language-${language}`}>
          {content}
        </code>
      </pre>
    </div>
  )
}
