import '@htmlplus/core/avatar.js';
import '@htmlplus/core/avatar-group.js';

const AvatarSize = () => {
  return (
    <div className="center">
      <plus-avatar-group>
        <plus-avatar size="xs">xs</plus-avatar>
        <plus-avatar size="sm">sm</plus-avatar>
        <plus-avatar size="md">md</plus-avatar>
        <plus-avatar size="lg">lg</plus-avatar>
        <plus-avatar size="xl">xl</plus-avatar>
      </plus-avatar-group>
    </div>
  );
};

export default AvatarSize;
