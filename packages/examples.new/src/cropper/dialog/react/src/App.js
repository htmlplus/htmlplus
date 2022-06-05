import { Element, State } from '@htmlplus/element';
import { useState } from "react";
import { Dialog.Toggler } from "TODO";
import { Dialog } from "TODO";
import { Dialog.Content } from "TODO";
import { Dialog.Header } from "TODO";
import { Dialog.Body } from "TODO";
import { Cropper } from "TODO";
import { Dialog.Footer } from "TODO";
import { Dialog.Toggler } from "TODO";

const CropperDialog = () => {
  const [disabled, setDisabled] = useState(true);

  const change = disabled => {
    setDisabled(disabled);
  };

  return <>    
    <div className="center">      
      <Dialog.Toggler connector="dialog-cropper">
        Open
      </Dialog.Toggler>      
    </div>    
    <Dialog animation="fade" connector="dialog-cropper" onOpened={() => change(false)} onClosed={() => change(true)}>      
      <Dialog.Content>        
        <Dialog.Header>          Cropper</Dialog.Header>        
        <Dialog.Body>          
          <Cropper disabled={disabled} src="/assets/images/panda.jpg"></Cropper>          
        </Dialog.Body>        
        <Dialog.Footer>          
          <Dialog.Toggler>            Close</Dialog.Toggler>          
        </Dialog.Footer>        
      </Dialog.Content>      
    </Dialog>    
  </>;
};

export default CropperDialog;