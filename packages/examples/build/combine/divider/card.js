import React from "react";
import { PlusCard, PlusDivider } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    elevation: "10"
  }, "Item 1", /*#__PURE__*/React.createElement(PlusDivider, null), "Item 2", /*#__PURE__*/React.createElement(PlusDivider, null), "Item 3", /*#__PURE__*/React.createElement(PlusDivider, null), "Item 4", /*#__PURE__*/React.createElement(PlusDivider, null), "Item 5"));
};

export default {
  "key": "card",
  "ports": {
    "javascript": {
      "template": "<plus-card elevation=\"10\">\n  Item 1\n  <plus-divider></plus-divider>\n  Item 2\n  <plus-divider></plus-divider>\n  Item 3\n  <plus-divider></plus-divider>\n  Item 4\n  <plus-divider></plus-divider>\r\n  Item 5\r\n</plus-card>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusCard, PlusDivider } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusCard elevation=\"10\">\n      Item 1\n      <PlusDivider></PlusDivider>\n      Item 2\n      <PlusDivider></PlusDivider>\n      Item 3\n      <PlusDivider></PlusDivider>\n      Item 4\n      <PlusDivider></PlusDivider>\n      Item 5\n    </PlusCard>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-card elevation=\"10\">\n    Item 1\n    <plus-divider></plus-divider>\n    Item 2\n    <plus-divider></plus-divider>\n    Item 3\n    <plus-divider></plus-divider>\n    Item 4\n    <plus-divider></plus-divider>\n    Item 5\n  </plus-card>  \n</div>",
      "script": ""
    }
  }
}