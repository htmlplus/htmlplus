import { useRouter } from 'next/router';

import { Button } from '@app/components';
import * as Constants from '@app/constants';
import * as Utils from '@app/utils';

export const Usage = () => {
  const router = useRouter();
  const { framework } = router.query;
  return (
    <>
      <h2>Usage</h2>
      <p>
        <span>Follow the tutorials</span>
        &nbsp;
        <Button color="secondary-darken-4" link="underline" to={Utils.getPath('INSTALLATION_FRAMEWORK', { framework })}>
          here
        </Button>
        &nbsp;
        <span>to use the </span>
        <code>{Constants.PLATFORM_NAME}</code>
        <span>library on</span>
        &nbsp;
        <code>{framework}-based</code>
        &nbsp;
        <span>projects.</span>
      </p>
    </>
  );
};
