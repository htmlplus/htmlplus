import { Switch } from '@htmlplus/react';

const SwitchEvent = () => {
  const onChange = (event) => {
    window.alert(`Changed state to ${event.target.checked ? 'On' : 'Off'}`);
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
      <style>{`.ex-switch-event .center {  text-align: center;}`}</style>
    </div>
  )
};

export default SwitchEventExample;