import { Icon } from '@htmlplus/react';

const IconFlip = () => {
  return (
    <div className="center">
      <Icon>home</Icon>
      <Icon flip="horizontal">home</Icon>
      <Icon flip="vertical">home</Icon>
      <Icon flip="both">home</Icon>
    </div>
  );
};

export default IconFlip;
