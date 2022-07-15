import { Card, Divider } from "@htmlplus/react";

const DividerCard = () => {
  return <div className="divider-card">    
    <Card elevation="10">
      Item 1
      <Divider></Divider>
      Item 2
      <Divider></Divider>
      Item 3
      <Divider></Divider>
      Item 4
      <Divider></Divider>
      Item 5
    </Card>    
    <style>{".divider-card plus-card {  padding: 0 1rem;  line-height: 3rem;}"}</style></div>;
};

export default DividerCard;