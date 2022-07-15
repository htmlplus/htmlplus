import { AspectRatio, Card } from "@htmlplus/react";

const AspectRatioDefault = () => {
  return <div className="ex-aspect-ratio-default">    
    <AspectRatio value="16/9">      
      <Card tile>
        This box will always be 16/9 (unless you put more stuff in it)
      </Card>      
    </AspectRatio>    
    <style>{".ex-aspect-ratio-default plus-card {  --plus-card-background-color: #C5CAE9;  padding: 1rem;}"}</style></div>;
};

export default AspectRatioDefault;