import { Card } from "@htmlplus/react";

const CardCustomize = () => {
  return <div className="card-customize">    
    <Card elevation="12" outlined></Card>    
    <style>{".card-customize plus-card {  --plus-card-border-radius: 3rem 0;  --plus-card-border-width: 2px;  --plus-card-border-color: #c5c5c5;  --plus-card-background-color: #dadada;  height: 12rem;  width: 12rem;  margin: auto;}"}</style></div>;
};

export default CardCustomize;