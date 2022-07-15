import { Breadcrumb } from "@htmlplus/react";

const BreadcrumbDefault = () => {
  return <div className="breadcrumb-default">    
    <div className="center">      
      <Breadcrumb separator="/">        
        <a href="#">          HTMLPLUS</a>        
        <a href="#">          Core</a>        
        <a href="#">          UI Components</a>        
        <span>          Breadcrumb</span>        
      </Breadcrumb>      
    </div>    
    <style>{".breadcrumb-default .center {  text-align: center;}.breadcrumb-default plus-breadcrumb {  display: inline-block;  color: #707070;}.breadcrumb-default plus-breadcrumb a {  color: inherit;  text-decoration: none;}.breadcrumb-default plus-breadcrumb a:hover {  text-decoration: underline;}"}</style></div>;
};

export default BreadcrumbDefault;