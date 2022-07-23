import { Avatar } from "@htmlplus/react";

const AvatarStacked = () => {
  return <div className="ex-avatar-stacked">    
    <div className="center">      
      <Avatar.Group stacked>        
        <Avatar shape="circle">          
          <img src="http://placeimg.com/94/94/people" />          
        </Avatar>        
        <Avatar shape="circle">          
          <img src="http://placeimg.com/95/95/people" />          
        </Avatar>        
        <Avatar shape="circle">          
          <img src="http://placeimg.com/96/96/people" />          
        </Avatar>        
      </Avatar.Group>      
    </div>    
    <style>{".ex-avatar-stacked .center {  text-align: center;}"}</style></div>;
};

export default AvatarStacked;