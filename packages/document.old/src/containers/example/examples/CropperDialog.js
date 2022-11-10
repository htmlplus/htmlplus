/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Cropper, Dialog } from '@htmlplus/react';

const CropperDialog = () => {
  const [disabled, setDisabled] = useState(true);

  const change = (disabled) => {
    setDisabled(disabled);
  };

  return (
    <>
      <div className="center">
        <Dialog.Toggler connector="dialog-cropper">Open</Dialog.Toggler>
      </div>
      <Dialog
        animation="fade"
        connector="dialog-cropper"
        onOpened={() => change(false)}
        onClosed={() => change(true)}
      >
        <Dialog.Content>
          <Dialog.Header>Cropper</Dialog.Header>
          <Dialog.Body>
            <Cropper
              disabled={disabled}
              src="/assets/images/panda.jpg"
            ></Cropper>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

const CropperDialogExample = () => {
  return (
    <div className="ex-cropper-dialog dock">
      <CropperDialog />
      <style>{`.ex-cropper-dialog .center {  text-align: center;}`}</style>
    </div>
  )
};

export default CropperDialogExample;