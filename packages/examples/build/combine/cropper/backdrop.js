import React from "react";
import { PlusCropper } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview dock"
  }, /*#__PURE__*/React.createElement(PlusCropper, {
    backdrop: "false",
    src: "/assets/images/panda.jpg"
  }));
};

export default {
  "key": "backdrop",
  "ports": {
    "javascript": {
      "template": "<plus-cropper backdrop=\"false\" src=\"/assets/images/panda.jpg\"></plus-cropper>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusCropper } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusCropper backdrop=\"false\" src=\"/assets/images/panda.jpg\"></PlusCropper>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-cropper backdrop=\"false\" src=\"/assets/images/panda.jpg\"></plus-cropper>  \n</div>",
      "script": ""
    }
  }
}