import { Dialog } from "@htmlplus/react";

const DialogFullHeight = () => {
  return <>    
    <div className="center">      
      <Dialog.Toggler connector="dialog-full-height">
        Open
      </Dialog.Toggler>      
    </div>    
    <Dialog animation="fade" connector="dialog-full-height" placement="center" fullHeight>      
      <Dialog.Content>        
        <Dialog.Header>
          Dialog Title
        </Dialog.Header>        
        <Dialog.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
        </Dialog.Body>        
        <Dialog.Footer>          
          <Dialog.Toggler>
            Close
          </Dialog.Toggler>          
        </Dialog.Footer>        
      </Dialog.Content>      
    </Dialog>    
  </>;
};

export default DialogFullHeight;