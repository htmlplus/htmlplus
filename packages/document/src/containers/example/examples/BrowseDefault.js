import { Browse } from "@htmlplus/react";

const BrowseDefault = () => {
  const onChange = event => {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  };

  return <div className="ex-browse-default">    
    <Browse droppable onChange={event => onChange(event)}></Browse>    
    <style>{".ex-browse-default plus-browse {  background: white;  border: 2px dashed #e0e0e0;  border-radius: 4px;  display: block;  padding: 3rem;  text-align: center;}.ex-browse-default plus-browse[dragging]:not([dragging=false]) {  border-color: #0087f7;}"}</style></div>;
};

export default BrowseDefault;