/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card, Portal } from '@htmlplus/react';

const PortalStrategy = () => {
  return (
    <>
      <Portal target="#before" strategy="before">
        <h1 className="title">Before the card</h1>
      </Portal>
      <Card outlined id="before">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
      <br />
      <Portal target="#prepend" strategy="prepend">
        <h1 className="title">Prepend the card</h1>
      </Portal>
      <Card outlined id="prepend">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
      <br />
      <Portal target="#append" strategy="append">
        <h1 className="title">Append the card</h1>
      </Portal>
      <Card outlined id="append">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
      <br />
      <Portal target="#after" strategy="after">
        <h1 className="title">After the card</h1>
      </Portal>
      <Card outlined id="after">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
    </>
  );
};

const PortalStrategyExample = () => {
  return (
    <div className="ex-portal-strategy">
      <PortalStrategy />
      <style>{`.ex-portal-strategy .title {  color: deeppink;  margin: 0;  font-weight: normal;  font-size: 1em;  margin: 1em 0;}.ex-portal-strategy plus-card {  padding: 1em;}.ex-portal-strategy plus-card p {  margin: 0;}`}</style>
    </div>
  )
};

export default PortalStrategyExample;