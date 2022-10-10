import '@htmlplus/core/icon.js';

const IconFlip = () => {
  return (
    <div className="center">
      <plus-icon>home</plus-icon>
      <plus-icon flip="horizontal">home</plus-icon>
      <plus-icon flip="vertical">home</plus-icon>
      <plus-icon flip="both">home</plus-icon>
    </div>
  );
};

export default IconFlip;
