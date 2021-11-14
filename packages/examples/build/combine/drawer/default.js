import React from "react";
import { PlusGrid, PlusGridItem, PlusDrawer, PlusCard, PlusDrawerToggler } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, null, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "auto"
  }, /*#__PURE__*/React.createElement(PlusDrawer, {
    className: "fade",
    size: "200px",
    connector: "drawer-default"
  }, /*#__PURE__*/React.createElement(PlusCard, null, "Drawer Content"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "grow"
  }, /*#__PURE__*/React.createElement(PlusCard, null, /*#__PURE__*/React.createElement(PlusDrawerToggler, {
    connector: "drawer-default"
  }, "Toggle")))));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-grid>  \n  <plus-grid-item xs=\"auto\">    \n    <plus-drawer class=\"fade\" size=\"200px\" connector=\"drawer-default\">      \n      <plus-card>\n        Drawer Content\n      </plus-card>      \n    </plus-drawer>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"grow\">    \n    <plus-card>      \n      <plus-drawer-toggler connector=\"drawer-default\">\n        Toggle\n      </plus-drawer-toggler>      \n    </plus-card>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusDrawer, PlusCard, PlusDrawerToggler } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid>      \n      <PlusGridItem xs=\"auto\">        \n        <PlusDrawer className=\"fade\" size=\"200px\" connector=\"drawer-default\">          \n          <PlusCard>\n            Drawer Content\n          </PlusCard>          \n        </PlusDrawer>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"grow\">        \n        <PlusCard>          \n          <PlusDrawerToggler connector=\"drawer-default\">\n            Toggle\n          </PlusDrawerToggler>          \n        </PlusCard>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid>    \n    <plus-grid-item xs=\"auto\">      \n      <plus-drawer class=\"fade\" size=\"200px\" connector=\"drawer-default\">        \n        <plus-card>\n          Drawer Content\n        </plus-card>        \n      </plus-drawer>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"grow\">      \n      <plus-card>        \n        <plus-drawer-toggler connector=\"drawer-default\">\n          Toggle\n        </plus-drawer-toggler>        \n      </plus-card>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}