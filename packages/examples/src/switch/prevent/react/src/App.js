import { Switch } from '@htmlplus/react';

const SwitchPrevent = () => {
  const ensure = (event) => {
    if (window.confirm('Are you sure you want to toggle it?')) return;
    event.preventDefault();
  };

  return (
    <div className="center">
      <Switch onChange={(event) => ensure(event)}></Switch>
    </div>
  );
};

export default SwitchPrevent;
