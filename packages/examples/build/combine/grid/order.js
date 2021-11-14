import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, null, /*#__PURE__*/React.createElement(PlusGridItem, {
    orderXs: "3",
    xs: "grow"
  }, /*#__PURE__*/React.createElement("div", null, "order=3")), /*#__PURE__*/React.createElement(PlusGridItem, {
    orderXs: "2",
    xs: "grow"
  }, /*#__PURE__*/React.createElement("div", null, "order=2")), /*#__PURE__*/React.createElement(PlusGridItem, {
    orderXs: "1",
    xs: "grow"
  }, /*#__PURE__*/React.createElement("div", null, "order=1"))));
};

export default {
  "key": "order",
  "ports": {
    "javascript": {
      "template": "<plus-grid>  \n  <plus-grid-item order-xs=\"3\" xs=\"grow\">    \n    <div>\n      order=3\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item order-xs=\"2\" xs=\"grow\">    \n    <div>\n      order=2\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item order-xs=\"1\" xs=\"grow\">    \n    <div>\n      order=1\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid>      \n      <PlusGridItem orderXs=\"3\" xs=\"grow\">        \n        <div>\n          order=3\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem orderXs=\"2\" xs=\"grow\">        \n        <div>\n          order=2\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem orderXs=\"1\" xs=\"grow\">        \n        <div>\n          order=1\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid>    \n    <plus-grid-item order-xs=\"3\" xs=\"grow\">      \n      <div>\n        order=3\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item order-xs=\"2\" xs=\"grow\">      \n      <div>\n        order=2\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item order-xs=\"1\" xs=\"grow\">      \n      <div>\n        order=1\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}