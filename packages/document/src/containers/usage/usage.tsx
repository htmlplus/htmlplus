import { useRouter } from 'next/router';

import { Button } from '@app/components';
import * as Constants from '@app/constants';
import { Toc } from '@app/containers';
import * as Utils from '@app/utils';

export const Usage = () => {
  const router = useRouter();
  const { framework } = router.query;
  return (
    <>
      <h2>
        <Toc.Item level={1}>Usage</Toc.Item>
      </h2>
      <p>
        Follow the tutorials &nbsp;
        <Button link="underline" to={Utils.getPath('INSTALLATION_FRAMEWORK', { framework })}>
          here
        </Button>
        &nbsp; to use the &nbsp;
        <b>{Constants.PLATFORM_NAME}</b>
        &nbsp; library on &nbsp;
        <b>{framework}-based</b>
        &nbsp; projects.
      </p>
    </>
  );
};
