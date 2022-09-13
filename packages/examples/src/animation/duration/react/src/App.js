import { Animation } from '@htmlplus/react';

const AnimationDuration = () => {
  return (
    <Animation
      name="fade-in"
      duration="2500"
      iterations="Infinity"
      play
    ></Animation>
  );
};

export default AnimationDuration;
