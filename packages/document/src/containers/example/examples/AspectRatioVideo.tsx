import { AspectRatio } from "@htmlplus/react";

const AspectRatioVideo = () => {
  return <div className="aspect-ratio-video">    
    <AspectRatio value="16/9">      
      <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>      
    </AspectRatio>    
  </div>;
};

export default AspectRatioVideo;