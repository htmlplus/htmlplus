import { useState } from 'react';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/click-outside.js';

const ClickOutsideDefault = () => {
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);

  const onClick = () => {
    setInside(inside + 1);
  };

  const onClickOutside = () => {
    setOutside(outside + 1);
  };

  return (
    <plus-click-outside
      onClick={() => onClick()}
      onplus-click-outside={() => onClickOutside()}
    >
      <plus-card elevation="10">
        <plus-card-body>
          <b>{inside}</b> time(s) inside clicked
          <br />
          <b>{outside}</b> time(s) outside clicked
        </plus-card-body>
      </plus-card>
    </plus-click-outside>
  );
};

export default ClickOutsideDefault;
