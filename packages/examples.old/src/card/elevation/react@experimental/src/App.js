import { useState } from 'react';
import '@htmlplus/core/card.js';

const CardElevation = () => {
  const [elevation, setElevation] = useState('12');

  const onChange = (event) => {
    setElevation(event.target.value);
  };

  return (
    <>
      <plus-card elevation={elevation}></plus-card>
      <br />
      <input
        type="range"
        value={elevation}
        min="1"
        max="24"
        onChange={(event) => onChange(event)}
      />
    </>
  );
};

export default CardElevation;
