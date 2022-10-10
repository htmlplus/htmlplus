import { useState } from 'react';
import '@htmlplus/core/cropper.js';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';

const CropperDialog = () => {
  const [disabled, setDisabled] = useState(true);

  const change = (disabled) => {
    setDisabled(disabled);
  };

  return (
    <>
      <div className="center">
        <plus-dialog-toggler connector="dialog-cropper">
          Open
        </plus-dialog-toggler>
      </div>
      <plus-dialog
        animation="fade"
        connector="dialog-cropper"
        onplus-opened={() => change(false)}
        onplus-closed={() => change(true)}
      >
        <plus-dialog-content>
          <plus-dialog-header>Cropper</plus-dialog-header>
          <plus-dialog-body>
            <plus-cropper
              disabled={disabled}
              src="/assets/images/panda.jpg"
            ></plus-cropper>
          </plus-dialog-body>
          <plus-dialog-footer>
            <plus-dialog-toggler>Close</plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
};

export default CropperDialog;
