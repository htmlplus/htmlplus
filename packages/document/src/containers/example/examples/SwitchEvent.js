/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Switch } from '@htmlplus/react';

const SwitchEvent = () => {
  const onChange = (event) => {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  };

  return (
    <div className="center">
      <Switch onChange={(event) => onChange(event)}></Switch>
    </div>
  );
};

const SwitchEventExample = () => {
  return (
    <div className="ex-switch-event">
      <SwitchEvent />
      <style>{`.ex-switch-event .center {  text-align: center;  padding: 2.5rem 0;}`}</style>
    </div>
  )
};

export default SwitchEventExample;