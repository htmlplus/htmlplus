import '@htmlplus/core/switch.js';

const SwitchEvent = () => {
  const onChange = (event) => {
    window.alert(`Changed state to ${event.target.checked ? 'On' : 'Off'}`);
  };

  return (
    <div className="center">
      <plus-switch onplus-change={(event) => onChange(event)}></plus-switch>
    </div>
  );
};

export default SwitchEvent;
