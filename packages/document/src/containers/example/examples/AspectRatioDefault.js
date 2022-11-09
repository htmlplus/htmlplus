/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

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

const AspectRatioDefaultExample = () => {
  return (
    <div className="ex-aspect-ratio-default">
      <AspectRatioDefault />
      <style>{`.ex-aspect-ratio-default plus-card {  --plus-card-background-color: #c5cae9;  padding: 1rem;}`}</style>
    </div>
  )
};

export default AspectRatioDefaultExample;