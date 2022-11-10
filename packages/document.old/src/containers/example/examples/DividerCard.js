/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card, Divider } from '@htmlplus/react';

const DividerCard = () => {
  return (
    <Card elevation="10">
      Item 1<Divider></Divider>
      Item 2<Divider></Divider>
      Item 3<Divider></Divider>
      Item 4<Divider></Divider>
      Item 5
    </Card>
  );
};

const DividerCardExample = () => {
  return (
    <div className="ex-divider-card">
      <DividerCard />
      <style>{`.ex-divider-card plus-card {  padding: 0 1rem;  line-height: 3rem;}`}</style>
    </div>
  )
};

export default DividerCardExample;