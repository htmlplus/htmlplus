import { Avatar } from "@htmlplus/react";

const AvatarHoverable = () => {
  return <div className="ex-avatar-hoverable">    
    <div className="center">      
      <Avatar.Group stacked hoverable>        
        <Avatar shape="circle">          
          <img src="http://placeimg.com/97/97/people" />          
        </Avatar>        
        <Avatar shape="circle">          
          <img src="http://placeimg.com/98/98/people" />          
        </Avatar>        
        <Avatar shape="circle">          
          <img src="http://placeimg.com/99/99/people" />          
        </Avatar>        
        <Avatar shape="circle">          
          <img src="http://placeimg.com/99/99/people" />          
        </Avatar>        
        <Avatar shape="circle">
          +2
        </Avatar>        
      </Avatar.Group>      
    </div>    
    <style>{".ex-avatar-hoverable .center {  text-align: center;}"}</style></div>;
};

export default AvatarHoverable;