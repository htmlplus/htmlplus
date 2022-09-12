import { useRouter } from 'next/router';

import { Button } from '@app/components';
import { Toc } from '@app/containers';
import * as Utils from '@app/utils';

export const Api = () => {
  const router = useRouter();
  const { component, framework } = router.query;
  return (
    <>
      <h2>
        <Toc.Item level={2}>Api</Toc.Item>
      </h2>
      <p>
        Click &nbsp;
        <Button link="underline" to={Utils.getPath('API_DETAILS', { component, framework })}>
          here
        </Button>
        &nbsp; to learn more about <b>Properties</b>, <b>Slots</b>, <b>Events</b>, <b>CSS Variables</b>,{' '}
        <b>CSS Parts</b>, and <b>Methods</b>.
      </p>
    </>
  );
};
