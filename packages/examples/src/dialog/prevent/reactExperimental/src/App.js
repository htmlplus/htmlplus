import '@htmlplus/core/dialog.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';

const DialogPrevent = () => {
  const ensure = (type, event) => {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  };

  return (
    <>
      <div className="center">
        <plus-dialog-toggler connector="dialog-prevent">
          Open
        </plus-dialog-toggler>
      </div>
      <plus-dialog
        animation="fade"
        connector="dialog-prevent"
        onplus-open={(event) => ensure('open', event)}
        onplus-close={(event) => ensure('close', event)}
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
            <plus-dialog-toggler>Close</plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
};

export default DialogPrevent;
