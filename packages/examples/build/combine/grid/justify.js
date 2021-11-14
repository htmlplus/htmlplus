import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "Item")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "Item")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "Item"))));
};

export default {
  "key": "justify",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify=\"center\">  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      Item\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      Item\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      Item\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid justify=\"center\">      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          Item\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          Item\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          Item\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify=\"center\">    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        Item\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        Item\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        Item\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}