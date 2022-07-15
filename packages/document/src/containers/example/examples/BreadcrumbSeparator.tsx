import { Breadcrumb } from "@htmlplus/react";

const BreadcrumbSeparator = () => {
  return <div className="ex-breadcrumb-separator">    
    <div className="container">      
      <Breadcrumb separator="\">        
        <a href="#">          First</a>        
        <a href="#">          Second</a>        
        <a href="#">          Third</a>        
        <a href="#">          Fourth</a>        
        <a href="#">          Fifth</a>        
      </Breadcrumb>      
    </div>    
    <div className="container">      
      <Breadcrumb separator="-">        
        <a href="#">          First</a>        
        <a href="#">          Second</a>        
        <a href="#">          Third</a>        
        <a href="#">          Fourth</a>        
        <a href="#">          Fifth</a>        
      </Breadcrumb>      
    </div>    
    <div className="container">      
      <Breadcrumb separator="/">        
        <a href="#">          First</a>        
        <a href="#">          Second</a>        
        <a href="#">          Third</a>        
        <a href="#">          Fourth</a>        
        <a href="#">          Fifth</a>        
      </Breadcrumb>      
    </div>    
    <style>{".ex-breadcrumb-separator .container {  text-align: center;  margin: 0.75em}.ex-breadcrumb-separator plus-breadcrumb {  display: inline-block;  color: #707070;}.ex-breadcrumb-separator plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-separator plus-breadcrumb a:hover {  text-decoration: underline;}"}</style></div>;
};

export default BreadcrumbSeparator;