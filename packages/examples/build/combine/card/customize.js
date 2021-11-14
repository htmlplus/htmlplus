import React from "react";
import { PlusCard } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    elevation: "12",
    outlined: true
  }));
};

export default {
  "key": "customize",
  "ports": {
    "javascript": {
      "template": "<plus-card elevation=\"12\" outlined></plus-card>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusCard elevation=\"12\" outlined></PlusCard>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-card elevation=\"12\" outlined></plus-card>  \n</div>",
      "script": ""
    }
  }
}