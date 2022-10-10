import '@htmlplus/core/avatar.js';

const AvatarLink = () => {
  return (
    <div className="center">
      <plus-avatar>
        <img src="http://placeimg.com/97/97/people" />
        <a href="http://placeimg.com/97/97/people" target="_blank"></a>
      </plus-avatar>
    </div>
  );
};

export default AvatarLink;
