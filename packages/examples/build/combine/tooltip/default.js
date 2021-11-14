import React from "react";
import { PlusTooltip } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, "Button", /*#__PURE__*/React.createElement(PlusTooltip, null, "Tooltip"))));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<div>  \n  <button>\n    Button\n    <plus-tooltip>      Tooltip</plus-tooltip>    \n  </button>  \n</div>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusTooltip } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <div>      \n      <button>\n        Button\n        <PlusTooltip>          Tooltip</PlusTooltip>        \n      </button>      \n    </div>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <button>\n      Button\n      <plus-tooltip>        Tooltip</plus-tooltip>      \n    </button>    \n  </div>  \n</div>",
      "script": ""
    }
  }
}