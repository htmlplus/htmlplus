import '@htmlplus/core/card.js';
import '@htmlplus/core/portal.js';

const PortalStrategy = () => {
  return (
    <>
      <plus-portal target="#before" strategy="before">
        <h1 className="title">Before the card</h1>
      </plus-portal>
      <plus-card outlined id="before">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </plus-card>
      <br />
      <plus-portal target="#prepend" strategy="prepend">
        <h1 className="title">Prepend the card</h1>
      </plus-portal>
      <plus-card outlined id="prepend">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </plus-card>
      <br />
      <plus-portal target="#append" strategy="append">
        <h1 className="title">Append the card</h1>
      </plus-portal>
      <plus-card outlined id="append">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </plus-card>
      <br />
      <plus-portal target="#after" strategy="after">
        <h1 className="title">After the card</h1>
      </plus-portal>
      <plus-card outlined id="after">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </plus-card>
    </>
  );
};

export default PortalStrategy;
