import { Dialog } from '@htmlplus/react';

const DialogFullWidth = () => {
  return (
    <>
      <div className="center">
        <Dialog.Toggler connector="dialog-full-width">Open</Dialog.Toggler>
      </div>
      <Dialog animation="fade" connector="dialog-full-width" fullWidth>
        <Dialog.Content>
          <Dialog.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Dialog.Body>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

export default DialogFullWidth;
