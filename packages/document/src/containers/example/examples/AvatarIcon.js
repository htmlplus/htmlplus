import { Avatar, Icon } from "@htmlplus/react";

const AvatarIcon = () => {
  return <div className="ex-avatar-icon">    
    <div className="center">      
      <Avatar>        
        <Icon>          user</Icon>        
      </Avatar>      
    </div>    
    <style>{".ex-avatar-icon .center {  text-align: center;}"}</style></div>;
};

export default AvatarIcon;