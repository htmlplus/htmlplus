import { Card } from "@htmlplus/react";

const CardOutlined = () => {
  return <div className="ex-card-outlined">    
    <Card outlined></Card>    
    <style>{".ex-card-outlined plus-card {  height: 12rem;  width: 12rem;  margin: auto;}"}</style></div>;
};

export default CardOutlined;