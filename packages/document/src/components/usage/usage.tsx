import { Button } from '@app/components';
import * as Constants from '@app/constants';

export const Usage = () => {
  return (
    <>
      <h2>Usage</h2>
      <p>
        <span>Follow the tutorials</span>
        &nbsp;
        <Button color="secondary-darken-4" link="underline" to={`ROUTE:INSTALLATION:TODO`}>
          here
        </Button>
        &nbsp;
        <span>to use the </span>
        <code>{Constants.PLATFORM_NAME}</code>
        <span>library on</span>
        &nbsp;
        <code>TODO-based</code>
        &nbsp;
        <span>projects.</span>
      </p>
    </>
  );
};
