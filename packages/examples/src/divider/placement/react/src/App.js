import { Divider } from '@htmlplus/react';

const DividerPlacement = () => {
  return (
    <>
      <Divider placement="center">Center</Divider>
      <br />
      <Divider placement="start">Start</Divider>
      <br />
      <Divider placement="end">End</Divider>
    </>
  );
};

export default DividerPlacement;
