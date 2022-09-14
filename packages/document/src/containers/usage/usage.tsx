import { useRouter } from 'next/router';

import { Button, Code } from '@app/components';
import { Toc } from '@app/containers';
import * as Utils from '@app/utils';

export const Usage = () => {
  const router = useRouter();
  const { framework } = router.query;
  return (
    <>
      <h2>
        <Toc.Item level={2}>Usage</Toc.Item>
      </h2>
      <p>
        Follow the tutorials &nbsp;
        <Button link="underline" to={Utils.getPath('INSTALLATION_FRAMEWORK', { framework })}>
          here
        </Button>
        &nbsp; to use the &nbsp;
        <b>HTMLPLUS</b>
        &nbsp; library on &nbsp;
        <b>{framework}-based</b>
        &nbsp; projects.
      </p>
      <Code language="shell">
        npm install
        {(() => {
          switch (framework) {
            case 'angular':
              return '@htmlplus/core';
            case 'javascript':
              return '@htmlplus/core';
            case 'react':
              return '@htmlplus/react';
            case 'svelte':
              return '@htmlplus/core';
            case 'vue':
              return '@htmlplus/core';
          }
        })()}
      </Code>
    </>
  );
};
