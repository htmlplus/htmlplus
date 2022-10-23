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

export default SwitchEvent;
