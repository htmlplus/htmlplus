import { AspectRatio, Card } from '@htmlplus/react';

const AspectRatioDefault = () => {
  return (
    <AspectRatio value="16/9">
      <Card tile>
        This box will always be 16/9 (unless you put more stuff in it)
      </Card>
    </AspectRatio>
  );
};

export default AspectRatioDefault;
