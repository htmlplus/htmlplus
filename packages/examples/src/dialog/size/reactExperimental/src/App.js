import { useState } from 'react';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/grid-item.js';

const DialogSize = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('md');

  const hide = () => {
    setOpen(false);
  };

  const show = (size) => {
    setSize(size);
    setOpen(true);
  };

  return (
    <>
      <plus-grid justify-content="center" gutter="md">
        <plus-grid-item xs="12" sm="auto">
          <button onClick={() => show('sm')}>Small dialog</button>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <button onClick={() => show('lg')}>Large dialog</button>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <button onClick={() => show('xl')}>Extra large dialog</button>
        </plus-grid-item>
      </plus-grid>
      <plus-dialog
        animation="fade"
        open={open}
        size={size}
        onplus-close={() => hide()}
      >
        <plus-dialog-content>
          <plus-dialog-header>Dialog Title</plus-dialog-header>
          <plus-dialog-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </plus-dialog-body>
          <plus-dialog-footer>
            <button onClick={() => hide()}>Close</button>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
};

export default DialogSize;
