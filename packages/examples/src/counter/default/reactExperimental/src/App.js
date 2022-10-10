import { useState } from 'react';
import '@htmlplus/core/counter.js';

const CounterDefault = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="center">
      <plus-counter
        to="1000"
        play={play}
        onplus-complete={() => setPlay(false)}
      ></plus-counter>
      <br />
      <button onClick={() => setPlay(true)}>Start</button>
    </div>
  );
};

export default CounterDefault;
