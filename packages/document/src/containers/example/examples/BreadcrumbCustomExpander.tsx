import { Breadcrumb } from "@htmlplus/react";

const BreadcrumbCustomExpander = () => {
  return <div className="breadcrumb-custom-expander">    
    <div className="center">      
      <Breadcrumb separator="-" max={2} expanderText="Show more">        
        <svg slot="expander" viewBox="0 0 16 16"><path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>        
        <a href="#">          HTMLPLUS</a>        
        <a href="#">          Core</a>        
        <a href="#">          UI Components</a>        
        <a href="#">          Breadcrumb</a>        
      </Breadcrumb>      
    </div>    
    <style>{".breadcrumb-custom-expander .center {  text-align: center;}.breadcrumb-custom-expander plus-breadcrumb {  display: inline-block;  color: #707070;}.breadcrumb-custom-expander plus-breadcrumb a {  color: inherit;  text-decoration: none;}.breadcrumb-custom-expander plus-breadcrumb a:hover {  text-decoration: underline;}"}</style></div>;
};

export default BreadcrumbCustomExpander;