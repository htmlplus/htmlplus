/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar } from '@htmlplus/react';

const AvatarGroup = () => {
  return (
    <div className="center">
      <Avatar.Group>
        <Avatar>
          <img src="http://placeimg.com/91/91/people" />
        </Avatar>
        <Avatar>
          <img src="http://placeimg.com/92/92/people" />
        </Avatar>
        <Avatar>
          <img src="http://placeimg.com/93/93/people" />
        </Avatar>
      </Avatar.Group>
    </div>
  );
};

const AvatarGroupExample = () => {
  return (
    <div className="ex-avatar-group">
      <AvatarGroup />
      <style>{`.ex-avatar-group .center {  text-align: center;}`}</style>
    </div>
  )
};

export default AvatarGroupExample;