import { useState } from 'react';
import { Card } from '@htmlplus/react';

const CardElevation = () => {
  const [elevation, setElevation] = useState('12');

  const onChange = (event) => {
    setElevation(event.target.value);
  };

  return (
    <>
      <Card elevation={elevation}></Card>
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
