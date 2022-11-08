import { Avatar } from '@htmlplus/react';

const AvatarLink = () => {
  return (
    <div className="center">
      <Avatar>
        <img src="http://placeimg.com/97/97/people" />
        <a href="http://placeimg.com/97/97/people" target="_blank"></a>
      </Avatar>
    </div>
  );
};

export default AvatarLink;
