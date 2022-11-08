import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';

const AvatarShape = () => {
  return (
    <div className="center">
      <plus-avatar-group>
        <plus-avatar shape="circle">C</plus-avatar>
        <plus-avatar shape="round">R</plus-avatar>
        <plus-avatar shape="tile">T</plus-avatar>
      </plus-avatar-group>
    </div>
  );
};

export default AvatarShape;
