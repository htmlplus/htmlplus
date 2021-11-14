import React from "react";
import { PlusToast } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusToast, null));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-toast></plus-toast>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusToast } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusToast></PlusToast>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-toast></plus-toast>  \n</div>",
      "script": ""
    }
  }
}