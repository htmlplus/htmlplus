/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Sticky } from '@htmlplus/react';

const StickyContacts = () => {
  return (
    <div className="container">
      <Sticky>A</Sticky>
      <p>A</p>
      <Sticky>B</Sticky>
      <p>B</p>
      <Sticky>C</Sticky>
      <p>C</p>
      <Sticky>D</Sticky>
      <p>D</p>
      <Sticky>E</Sticky>
      <p>E</p>
      <Sticky>F</Sticky>
      <p>F</p>
    </div>
  );
};

const StickyContactsExample = () => {
  return (
    <div className="ex-sticky-contacts dock">
      <StickyContacts />
      <style>{`.ex-sticky-contacts .container {  height: 20rem;  overflow: auto;}.ex-sticky-contacts p {  color: lightgray;  font-size: 10rem;  line-height: 2;  text-align: center;}.ex-sticky-contacts plus-sticky {  background-color: lightgray;  padding: 0.5rem 1rem;}`}</style>
    </div>
  )
};

export default StickyContactsExample;