import { Element } from '@htmlplus/element';
import { Dialog.Toggler } from "TODO";
import { Dialog } from "TODO";
import { Dialog.Content } from "TODO";
import { Dialog.Body } from "TODO";

const DialogSticky = () => {
  return <>    
    <div className="center">      
      <Dialog.Toggler connector="dialog-sticky">
        Open
      </Dialog.Toggler>      
    </div>    
    <Dialog animation="fade" connector="dialog-sticky" fullWidth sticky>      
      <Dialog.Content>        
        <Dialog.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Dialog.Body>        
      </Dialog.Content>      
    </Dialog>    
  </>;
};

export default DialogSticky;