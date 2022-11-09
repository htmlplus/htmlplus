/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Card, ClickOutside } from '@htmlplus/react';

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
    <ClickOutside
      onClick={() => onClick()}
      onClickOutside={() => onClickOutside()}
    >
      <Card elevation="10">
        <Card.Body>
          <b>{inside}</b> time(s) inside clicked
          <br />
          <b>{outside}</b> time(s) outside clicked
        </Card.Body>
      </Card>
    </ClickOutside>
  );
};

const ClickOutsideDefaultExample = () => {
  return (
    <div className="ex-click-outside-default">
      <ClickOutsideDefault />
      <style>{`.ex-click-outside-default plus-click-outside {  margin: auto;  display: block;  max-width: 20rem;}`}</style>
    </div>
  )
};

export default ClickOutsideDefaultExample;