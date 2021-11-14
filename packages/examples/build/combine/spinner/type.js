import React from "react";
import { PlusGrid, PlusGridItem, PlusSpinner } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    justifyContent: "evenly"
  }, /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    type: "default"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    type: "double-bounce"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    type: "ring"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    type: "ripple"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    type: "dual-ring"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    type: "square"
  }))));
};

export default {
  "key": "type",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify-content=\"evenly\">  \n  <plus-grid-item>    \n    <plus-spinner type=\"default\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner type=\"double-bounce\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner type=\"ring\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner type=\"ripple\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner type=\"dual-ring\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner type=\"square\"></plus-spinner>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusSpinner } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid justifyContent=\"evenly\">      \n      <PlusGridItem>        \n        <PlusSpinner type=\"default\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner type=\"double-bounce\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner type=\"ring\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner type=\"ripple\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner type=\"dual-ring\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner type=\"square\"></PlusSpinner>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify-content=\"evenly\">    \n    <plus-grid-item>      \n      <plus-spinner type=\"default\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner type=\"double-bounce\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner type=\"ring\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner type=\"ripple\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner type=\"dual-ring\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner type=\"square\"></plus-spinner>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}