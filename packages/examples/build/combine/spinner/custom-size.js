import React from "react";
import { PlusGrid, PlusGridItem, PlusSpinner } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    alignItems: "center",
    justifyContent: "evenly"
  }, /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    size: "sm"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    size: "md"
  })), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement(PlusSpinner, {
    size: "lg"
  }))));
};

export default {
  "key": "custom-size",
  "ports": {
    "javascript": {
      "template": "<plus-grid align-items=\"center\" justify-content=\"evenly\">  \n  <plus-grid-item>    \n    <plus-spinner size=\"sm\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner size=\"md\"></plus-spinner>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <plus-spinner size=\"lg\"></plus-spinner>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusSpinner } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid alignItems=\"center\" justifyContent=\"evenly\">      \n      <PlusGridItem>        \n        <PlusSpinner size=\"sm\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner size=\"md\"></PlusSpinner>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <PlusSpinner size=\"lg\"></PlusSpinner>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid align-items=\"center\" justify-content=\"evenly\">    \n    <plus-grid-item>      \n      <plus-spinner size=\"sm\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner size=\"md\"></plus-spinner>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <plus-spinner size=\"lg\"></plus-spinner>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}