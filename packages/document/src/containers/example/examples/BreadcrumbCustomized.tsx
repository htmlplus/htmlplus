import { Breadcrumb } from "@htmlplus/react";

const BreadcrumbCustomized = () => {
  return <div className="ex-breadcrumb-customized">    
    <Breadcrumb className="first" max={2}>      
      <svg slot="separator" viewBox="0 0 16 16"><path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>      
      <a href="#">        HTMLPLUS</a>      
      <a href="#">        Core</a>      
      <a href="#">        UI Components</a>      
      <a href="#">        Breadcrumb</a>      
    </Breadcrumb>    
    <br />    
    <Breadcrumb className="second" max={2}>      
      <svg slot="separator" viewBox="0 0 16 16"><path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>      
      <a href="#">        HTMLPLUS</a>      
      <a href="#">        Core</a>      
      <a href="#">        UI Components</a>      
      <a href="#">        Breadcrumb</a>      
    </Breadcrumb>    
    <style>{".ex-breadcrumb-customized plus-breadcrumb {  padding: 0.75em;  border-radius: 0.25em;}.ex-breadcrumb-customized plus-breadcrumb.first a {  text-decoration: none;  color: white;}.ex-breadcrumb-customized plus-breadcrumb.first {  --plus-breadcrumb-gutter-x: 0.75em;  --plus-breadcrumb-gutter-y: 0.75em;  background-color: #2B78AC;}.ex-breadcrumb-customized plus-breadcrumb.first::part(expander) {  background-color: transparent;  color: white;  height: 1em;  width: 1em;}.ex-breadcrumb-customized plus-breadcrumb.first::part(separator) {  color: white;  height: 0.75em;  width: 0.75em;}.ex-breadcrumb-customized plus-breadcrumb.second {  --plus-breadcrumb-gutter-x: 0.75em;  --plus-breadcrumb-gutter-y: 0.75em;  background-color: #DCDCDC;}.ex-breadcrumb-customized plus-breadcrumb.second a {  text-decoration: none;  color: black;}.ex-breadcrumb-customized plus-breadcrumb.second::part(expander) {  background-color: transparent;  color: black;  height: 1em;  width: 1em;}.ex-breadcrumb-customized plus-breadcrumb.second::part(separator) {  color: black;  height: 0.75em;  width: 0.75em;}"}</style></div>;
};

export default BreadcrumbCustomized;