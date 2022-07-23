import { Avatar } from "@htmlplus/react";

const AvatarImage = () => {
  return <div className="ex-avatar-image">    
    <div className="center">      
      <Avatar>        
        <img src="http://placeimg.com/90/90/people" />        
      </Avatar>      
    </div>    
    <style>{".ex-avatar-image .center {  text-align: center;}"}</style></div>;
};

export default AvatarImage;