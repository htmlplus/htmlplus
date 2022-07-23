import { Avatar } from "@htmlplus/react";

const AvatarLink = () => {
  return <div className="ex-avatar-link">    
    <div className="center">      
      <Avatar>        
        <img src="http://placeimg.com/97/97/people" />        
        <a href="http://placeimg.com/97/97/people" target="_blank"></a>        
      </Avatar>      
    </div>    
    <style>{".ex-avatar-link .center {  text-align: center;}"}</style></div>;
};

export default AvatarLink;