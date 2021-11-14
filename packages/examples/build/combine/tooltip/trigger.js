import React from "react";
import { PlusGrid, PlusGridItem, PlusTooltip } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    justifyContent: "evenly"
  }, /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement("button", null, "Hover", /*#__PURE__*/React.createElement(PlusTooltip, {
    trigger: "hover"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement("button", null, "Focus", /*#__PURE__*/React.createElement(PlusTooltip, {
    trigger: "focus"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, null, /*#__PURE__*/React.createElement("button", null, "Click", /*#__PURE__*/React.createElement(PlusTooltip, {
    trigger: "click"
  }, "Tooltip")))));
};

export default {
  "key": "trigger",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify-content=\"evenly\">  \n  <plus-grid-item>    \n    <button>\n      Hover\n      <plus-tooltip trigger=\"hover\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <button>\n      Focus\n      <plus-tooltip trigger=\"focus\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item>    \n    <button>\n      Click\n      <plus-tooltip trigger=\"click\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusTooltip } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid justifyContent=\"evenly\">      \n      <PlusGridItem>        \n        <button>\n          Hover\n          <PlusTooltip trigger=\"hover\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <button>\n          Focus\n          <PlusTooltip trigger=\"focus\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem>        \n        <button>\n          Click\n          <PlusTooltip trigger=\"click\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify-content=\"evenly\">    \n    <plus-grid-item>      \n      <button>\n        Hover\n        <plus-tooltip trigger=\"hover\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <button>\n        Focus\n        <plus-tooltip trigger=\"focus\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item>      \n      <button>\n        Click\n        <plus-tooltip trigger=\"click\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}