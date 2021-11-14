import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    wrap: "off"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "6"
  }, /*#__PURE__*/React.createElement("div", null, "xs=6")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "xs=2")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "6"
  }, /*#__PURE__*/React.createElement("div", null, "xs=6")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "xs=2"))));
};

export default {
  "key": "wrap",
  "ports": {
    "javascript": {
      "template": "<plus-grid wrap=\"off\">  \n  <plus-grid-item xs=\"6\">    \n    <div>\n      xs=6\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      xs=2\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"6\">    \n    <div>\n      xs=6\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      xs=2\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid wrap=\"off\">      \n      <PlusGridItem xs=\"6\">        \n        <div>\n          xs=6\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          xs=2\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"6\">        \n        <div>\n          xs=6\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          xs=2\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid wrap=\"off\">    \n    <plus-grid-item xs=\"6\">      \n      <div>\n        xs=6\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        xs=2\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"6\">      \n      <div>\n        xs=6\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        xs=2\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}