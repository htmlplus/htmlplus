import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, null, /*#__PURE__*/React.createElement(PlusGridItem, {
    hideSm: true,
    xs: "3"
  }, /*#__PURE__*/React.createElement("div", null, "xs=3, hide-sm")), /*#__PURE__*/React.createElement(PlusGridItem, {
    hideMd: true,
    xs: "4"
  }, /*#__PURE__*/React.createElement("div", null, "xs=4, hide-md")), /*#__PURE__*/React.createElement(PlusGridItem, {
    hideLg: true,
    xs: "5"
  }, /*#__PURE__*/React.createElement("div", null, "xs=5, hide-lg"))));
};

export default {
  "key": "hide",
  "ports": {
    "javascript": {
      "template": "<plus-grid>  \n  <plus-grid-item hide-sm xs=\"3\">    \n    <div>\n      xs=3, hide-sm\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item hide-md xs=\"4\">    \n    <div>\n      xs=4, hide-md\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item hide-lg xs=\"5\">    \n    <div>\n      xs=5, hide-lg\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid>      \n      <PlusGridItem hideSm xs=\"3\">        \n        <div>\n          xs=3, hide-sm\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem hideMd xs=\"4\">        \n        <div>\n          xs=4, hide-md\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem hideLg xs=\"5\">        \n        <div>\n          xs=5, hide-lg\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid>    \n    <plus-grid-item hide-sm xs=\"3\">      \n      <div>\n        xs=3, hide-sm\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item hide-md xs=\"4\">      \n      <div>\n        xs=4, hide-md\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item hide-lg xs=\"5\">      \n      <div>\n        xs=5, hide-lg\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}