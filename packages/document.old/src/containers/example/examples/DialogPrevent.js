/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Dialog } from '@htmlplus/react';

const DialogPrevent = () => {
  const ensure = (type, event) => {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  };

  return (
    <>
      <div className="center">
        <Dialog.Toggler connector="dialog-prevent">Open</Dialog.Toggler>
      </div>
      <Dialog
        animation="fade"
        connector="dialog-prevent"
        onOpen={(event) => ensure('open', event)}
        onClose={(event) => ensure('close', event)}
      >
        <Dialog.Content>
          <Dialog.Header>Dialog Title</Dialog.Header>
          <Dialog.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

const DialogPreventExample = () => {
  return (
    <div className="ex-dialog-prevent">
      <DialogPrevent />
      <style>{`.ex-dialog-prevent .center {  text-align: center;}`}</style>
    </div>
  )
};

export default DialogPreventExample;