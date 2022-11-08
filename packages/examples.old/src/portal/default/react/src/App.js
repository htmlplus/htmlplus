import { Portal } from '@htmlplus/react';

const PortalDefault = () => {
  return (
    <>
      <div id="target"></div>
      <div id="source">
        <Portal target="#target">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Portal>
      </div>
    </>
  );
};

export default PortalDefault;
