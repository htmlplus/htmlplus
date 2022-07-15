import { Browse } from "@htmlplus/react";

const BrowseDefault = () => {
  const onChange = event => {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  };

  return <div className="ex-browse-default">    
    <Browse droppable onChange={event => onChange(event)}></Browse>    
  </div>;
};

export default BrowseDefault;