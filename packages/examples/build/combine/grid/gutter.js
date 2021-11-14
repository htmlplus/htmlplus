import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    gutter: "lg"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6",
    lg: "5"
  }, /*#__PURE__*/React.createElement("div", null, "xs=12, sm=6, lg=5")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6",
    lg: "4"
  }, /*#__PURE__*/React.createElement("div", null, "xs=12, sm=6, lg=4")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "7",
    lg: "3"
  }, /*#__PURE__*/React.createElement("div", null, "xs=12, sm=7, lg=3")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "5",
    lg: "3"
  }, /*#__PURE__*/React.createElement("div", null, "xs=12, sm=5, lg=3")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "5",
    lg: "4"
  }, /*#__PURE__*/React.createElement("div", null, "xs=12, sm=5, lg=4")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "7",
    lg: "5"
  }, /*#__PURE__*/React.createElement("div", null, "xs=12, sm=7, lg=5"))));
};

export default {
  "key": "gutter",
  "ports": {
    "javascript": {
      "template": "<plus-grid gutter=\"lg\">  \n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">    \n    <div>\n      xs=12, sm=6, lg=5\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">    \n    <div>\n      xs=12, sm=6, lg=4\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">    \n    <div>\n      xs=12, sm=7, lg=3\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">    \n    <div>\n      xs=12, sm=5, lg=3\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">    \n    <div>\n      xs=12, sm=5, lg=4\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">    \n    <div>\n      xs=12, sm=7, lg=5\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid gutter=\"lg\">      \n      <PlusGridItem xs=\"12\" sm=\"6\" lg=\"5\">        \n        <div>\n          xs=12, sm=6, lg=5\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\" lg=\"4\">        \n        <div>\n          xs=12, sm=6, lg=4\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"7\" lg=\"3\">        \n        <div>\n          xs=12, sm=7, lg=3\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"5\" lg=\"3\">        \n        <div>\n          xs=12, sm=5, lg=3\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"5\" lg=\"4\">        \n        <div>\n          xs=12, sm=5, lg=4\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"7\" lg=\"5\">        \n        <div>\n          xs=12, sm=7, lg=5\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid gutter=\"lg\">    \n    <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">      \n      <div>\n        xs=12, sm=6, lg=5\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">      \n      <div>\n        xs=12, sm=6, lg=4\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">      \n      <div>\n        xs=12, sm=7, lg=3\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">      \n      <div>\n        xs=12, sm=5, lg=3\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">      \n      <div>\n        xs=12, sm=5, lg=4\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">      \n      <div>\n        xs=12, sm=7, lg=5\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}