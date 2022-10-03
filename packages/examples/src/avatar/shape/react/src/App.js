import { Avatar } from '@htmlplus/react';

const AvatarShape = () => {
  return (
    <div className="center">
      <Avatar.Group>
        <Avatar shape="circle">C</Avatar>
        <Avatar shape="round">R</Avatar>
        <Avatar shape="tile">T</Avatar>
      </Avatar.Group>
    </div>
  );
};

export default AvatarShape;
