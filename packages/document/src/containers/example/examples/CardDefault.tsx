import { Card } from "@htmlplus/react";

const CardDefault = () => {
  return <div className="ex-card-default">    
    <div className="container">      
      <Card></Card>      
    </div>    
    <style>{".ex-card-default .container {  padding: 2rem 0;  background-color: #eeeeee;}.ex-card-default plus-card {  height: 12rem;  width: 12rem;  margin: auto;}"}</style></div>;
};

export default CardDefault;