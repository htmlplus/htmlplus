import { useRouter } from 'next/router';

import { Button, Code } from '@app/components';
import { Toc } from '@app/containers';
import { ROUTES, getPath } from '@app/utils';

export const Usage = () => {
  const router = useRouter();
  const { framework } = router.query as any;
  return (
    <>
      <h2>
        <Toc.Item level={2}>Usage</Toc.Item>
      </h2>
      <p>
        Follow the tutorials &nbsp;
        <Button link="underline" to={getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework })}>
          here
        </Button>
        &nbsp; to use the &nbsp;
        <b>HTMLPLUS</b>
        &nbsp; library on &nbsp;
        <b>{(framework as string).toUpperCase()}</b>
        &nbsp; projects.
      </p>
      <Code language="shell">
        {(() => {
          switch (framework) {
            case 'angular':
              return 'npm install @htmlplus/core';
            case 'javascript':
              return 'npm install @htmlplus/core';
            case 'react':
              return 'npm install @htmlplus/react';
            case 'react@experimental':
              return 'npm install @htmlplus/core';
            case 'svelte':
              return 'npm install @htmlplus/core';
            case 'vue':
              return 'npm install @htmlplus/core';
          }
        })()}
      </Code>
    </>
  );
};
