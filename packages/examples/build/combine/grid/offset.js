import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, null, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "3"
  }, /*#__PURE__*/React.createElement("div", null, "xs=3")), /*#__PURE__*/React.createElement(PlusGridItem, {
    offsetXs: "3",
    xs: "3"
  }, /*#__PURE__*/React.createElement("div", null, "offset-xs=\"3\", xs=3")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "3"
  }, /*#__PURE__*/React.createElement("div", null, "xs=3"))));
};

export default {
  "key": "offset",
  "ports": {
    "javascript": {
      "template": "<plus-grid>  \n  <plus-grid-item xs=\"3\">    \n    <div>\n      xs=3\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item offset-xs=\"3\" xs=\"3\">    \n    <div>\n      offset-xs=\"3\", xs=3\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"3\">    \n    <div>\n      xs=3\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid>      \n      <PlusGridItem xs=\"3\">        \n        <div>\n          xs=3\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem offsetXs=\"3\" xs=\"3\">        \n        <div>\n          offset-xs=\"3\", xs=3\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"3\">        \n        <div>\n          xs=3\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid>    \n    <plus-grid-item xs=\"3\">      \n      <div>\n        xs=3\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item offset-xs=\"3\" xs=\"3\">      \n      <div>\n        offset-xs=\"3\", xs=3\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"3\">      \n      <div>\n        xs=3\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}