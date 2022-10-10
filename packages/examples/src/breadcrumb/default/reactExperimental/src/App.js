import '@htmlplus/core/breadcrumb.js';

const BreadcrumbDefault = () => {
  return (
    <div className="center">
      <plus-breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Components</a>
        <span>Breadcrumb</span>
      </plus-breadcrumb>
    </div>
  );
};

export default BreadcrumbDefault;
