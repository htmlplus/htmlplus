/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar } from '@htmlplus/react';

const AvatarSize = () => {
  return (
    <div className="center">
      <Avatar.Group>
        <Avatar size="xs">xs</Avatar>
        <Avatar size="sm">sm</Avatar>
        <Avatar size="md">md</Avatar>
        <Avatar size="lg">lg</Avatar>
        <Avatar size="xl">xl</Avatar>
      </Avatar.Group>
    </div>
  );
};

const AvatarSizeExample = () => {
  return (
    <div className="ex-avatar-size">
      <AvatarSize />
      <style>{`.ex-avatar-size .center {  text-align: center;}`}</style>
    </div>
  )
};

export default AvatarSizeExample;