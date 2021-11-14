import React from "react";
import { PlusCard } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview dock"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusCard, null)));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<div>    \n  <plus-card></plus-card>    \n</div>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <div>      \n      <PlusCard></PlusCard>      \n    </div>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <plus-card></plus-card>    \n  </div>  \n</div>",
      "script": ""
    }
  }
}