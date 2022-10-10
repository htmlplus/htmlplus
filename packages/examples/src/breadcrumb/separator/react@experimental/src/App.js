import '@htmlplus/core/breadcrumb.js';

const BreadcrumbSeparator = () => {
  return (
    <div className="center">
      <plus-breadcrumb separator="-">
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </plus-breadcrumb>
    </div>
  );
};

export default BreadcrumbSeparator;
