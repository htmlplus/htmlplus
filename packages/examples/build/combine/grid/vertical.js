import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    alignItems: "center",
    vertical: true
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "3"
  }, /*#__PURE__*/React.createElement("div", null, "Item")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "grow"
  }, /*#__PURE__*/React.createElement("div", null, "Item")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "3"
  }, /*#__PURE__*/React.createElement("div", null, "Item"))));
};

export default {
  "key": "vertical",
  "ports": {
    "javascript": {
      "template": "<plus-grid align-items=\"center\" vertical>  \n  <plus-grid-item xs=\"3\">    \n    <div>\n      Item\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"grow\">    \n    <div>\n      Item\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"3\">    \n    <div>\n      Item\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid alignItems=\"center\" vertical>      \n      <PlusGridItem xs=\"3\">        \n        <div>\n          Item\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"grow\">        \n        <div>\n          Item\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"3\">        \n        <div>\n          Item\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid align-items=\"center\" vertical>    \n    <plus-grid-item xs=\"3\">      \n      <div>\n        Item\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"grow\">      \n      <div>\n        Item\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"3\">      \n      <div>\n        Item\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}