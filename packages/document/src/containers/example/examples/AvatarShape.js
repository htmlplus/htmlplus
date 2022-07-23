import { Avatar } from "@htmlplus/react";

const AvatarShape = () => {
  return <div className="ex-avatar-shape">    
    <div className="center">      
      <Avatar.Group>        
        <Avatar shape="circle">          C</Avatar>        
        <Avatar shape="round">          R</Avatar>        
        <Avatar shape="tile">          T</Avatar>        
      </Avatar.Group>      
    </div>    
    <style>{".ex-avatar-shape .center {  text-align: center;}"}</style></div>;
};

export default AvatarShape;