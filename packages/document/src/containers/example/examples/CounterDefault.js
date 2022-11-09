/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

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

const CounterDefaultExample = () => {
  return (
    <div className="ex-counter-default">
      <CounterDefault />
      <style>{`.ex-counter-default .center {  text-align: center;}.ex-counter-default button {  margin: 1rem 0.5rem;}`}</style>
    </div>
  )
};

export default CounterDefaultExample;