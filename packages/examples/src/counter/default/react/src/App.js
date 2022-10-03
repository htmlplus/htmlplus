import { useState } from 'react';
import { Counter } from '@htmlplus/react';

const CounterDefault = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="center">
      <Counter
        to="1000"
        play={play}
        onComplete={() => setPlay(false)}
      ></Counter>
      <br />
      <button onClick={() => setPlay(true)}>Start</button>
    </div>
  );
};

export default CounterDefault;
