import { Element } from '@htmlplus/element';
import { Browse } from "TODO";

const BrowseDefault = () => {
  const onChange = event => {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  };

  return <>    
    <Browse droppable onChange={event => onChange(event)}></Browse>    
  </>;
};

export default BrowseDefault;