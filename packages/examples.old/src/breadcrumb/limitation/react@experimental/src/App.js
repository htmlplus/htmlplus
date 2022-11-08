import '@htmlplus/core/breadcrumb.js';

const BreadcrumbLimitation = () => {
  return (
    <>
      <div className="container">
        <plus-breadcrumb separator="/" max={4} offset={0}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
          <a href="#">Item 5</a>
          <a href="#">Item 6</a>
          <a href="#">Item 7</a>
          <a href="#">Item 8</a>
        </plus-breadcrumb>
      </div>
      <div className="container">
        <plus-breadcrumb separator="/" max={4} offset={2}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
          <a href="#">Item 5</a>
          <a href="#">Item 6</a>
          <a href="#">Item 7</a>
          <a href="#">Item 8</a>
        </plus-breadcrumb>
      </div>
      <div className="container">
        <plus-breadcrumb separator="/" max={4} offset={-1}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
          <a href="#">Item 5</a>
          <a href="#">Item 6</a>
          <a href="#">Item 7</a>
          <a href="#">Item 8</a>
        </plus-breadcrumb>
      </div>
    </>
  );
};

export default BreadcrumbLimitation;
