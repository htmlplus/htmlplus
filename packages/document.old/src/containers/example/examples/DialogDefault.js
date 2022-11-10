/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Dialog } from '@htmlplus/react';

const DialogDefault = () => {
  return (
    <>
      <div className="center">
        <Dialog.Toggler connector="dialog-default">Open</Dialog.Toggler>
      </div>
      <Dialog connector="dialog-default">
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

const DialogDefaultExample = () => {
  return (
    <div className="ex-dialog-default">
      <DialogDefault />
      <style>{`.ex-dialog-default .center {  text-align: center;}`}</style>
    </div>
  )
};

export default DialogDefaultExample;