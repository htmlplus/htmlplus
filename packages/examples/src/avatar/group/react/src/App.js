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

export default AvatarGroup;
