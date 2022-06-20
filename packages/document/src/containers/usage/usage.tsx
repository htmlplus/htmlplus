import { Button } from '@app/components';
import * as Constants from '@app/constants';
import { useRouter } from '@app/hooks';

export const Usage = () => {
  const router = useRouter();
  const { framework } = router.query;
  return (
    <>
      <h2>Usage</h2>
      <p>
        <span>Follow the tutorials</span>
        &nbsp;
        <Button color="secondary-darken-4" link="underline" to={router.get('INSTALLATION_FRAMEWORK', { framework })}>
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
