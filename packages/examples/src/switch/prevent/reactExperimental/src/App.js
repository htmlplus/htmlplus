import '@htmlplus/core/switch.js';

const SwitchPrevent = () => {
  const ensure = (event) => {
    if (window.confirm('Are you sure you want to toggle it?')) return;
    event.preventDefault();
  };

  return (
    <div className="center">
      <plus-switch onPlusChange={(event) => ensure(event)}></plus-switch>
    </div>
  );
};

export default SwitchPrevent;
