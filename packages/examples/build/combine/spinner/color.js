import React from "react";
import { PlusGrid, PlusGridItem, PlusSpinner } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    justifyContent: "evenly"
  }, /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    className: "spinner-1"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    className: "spinner-2"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    className: "spinner-3"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    className: "spinner-4"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    className: "spinner-5"
  }))));
};

export default {
  "key": "color",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify-content=\"evenly\">  \n  <plus-grid-item>    \n    <plus-spinner class=\"spinner-1\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner class=\"spinner-2\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner class=\"spinner-3\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner class=\"spinner-4\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner class=\"spinner-5\"></plus-spinner>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusSpinner } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid justifyContent=\"evenly\">      \n      <PlusGridItem>        \n        <PlusSpinner className=\"spinner-1\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner className=\"spinner-2\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner className=\"spinner-3\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner className=\"spinner-4\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner className=\"spinner-5\"></PlusSpinner>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify-content=\"evenly\">    \n    <plus-grid-item>      \n      <plus-spinner class=\"spinner-1\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner class=\"spinner-2\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner class=\"spinner-3\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner class=\"spinner-4\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner class=\"spinner-5\"></plus-spinner>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}