import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';

const AvatarHoverable = () => {
  return (
    <div className="center">
      <plus-avatar-group stacked hoverable>
        <plus-avatar shape="circle">
          <img src="http://placeimg.com/97/97/people" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="http://placeimg.com/98/98/people" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="http://placeimg.com/99/99/people" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="http://placeimg.com/99/99/people" />
        </plus-avatar>
        <plus-avatar shape="circle">+2</plus-avatar>
      </plus-avatar-group>
    </div>
  );
};

export default AvatarHoverable;
