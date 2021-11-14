import React from "react";
import { PlusSpinner } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusSpinner, {
    type: "dual-ring"
  })));
};

export default {
  "key": "customize",
  "ports": {
    "javascript": {
      "template": "<div>  \n  <plus-spinner type=\"dual-ring\"></plus-spinner>  \n</div>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusSpinner } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <div>      \n      <PlusSpinner type=\"dual-ring\"></PlusSpinner>      \n    </div>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <plus-spinner type=\"dual-ring\"></plus-spinner>    \n  </div>  \n</div>",
      "script": ""
    }
  }
}