import { useState } from "react";
import { Counter } from "@htmlplus/react";

const CounterDefault = () => {
  const [play, setPlay] = useState(false);
  return <div className="ex-counter-default">    
    <div className="center">      
      <Counter to="1000" play={play} onComplete={() => setPlay(false)}></Counter>      
      <br />      
      <br />      
      <button onClick={() => setPlay(true)}>        Start</button>      
      <button onClick={() => setPlay(false)}>        Reset</button>      
    </div>    
    <style>{".ex-counter-default .center {  text-align: center;}.ex-counter-default button {  margin: 0 1rem;}"}</style></div>;
};

export default CounterDefault;