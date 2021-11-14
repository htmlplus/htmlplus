import React from "react";
import { PlusCard } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    outlined: true
  }));
};

export default {
  "key": "outlined",
  "ports": {
    "javascript": {
      "template": "<plus-card outlined></plus-card>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusCard outlined></PlusCard>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-card outlined></plus-card>  \n</div>",
      "script": ""
    }
  }
}