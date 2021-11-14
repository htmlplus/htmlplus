import React from "react";
import { PlusAspectRatio } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusAspectRatio, {
    value: "16/9"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
  })));
};

export default {
  "key": "video",
  "ports": {
    "javascript": {
      "template": "<plus-aspect-ratio value=\"16/9\">  \n  <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>  \n</plus-aspect-ratio>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusAspectRatio } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusAspectRatio value=\"16/9\">      \n      <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>      \n    </PlusAspectRatio>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-aspect-ratio value=\"16/9\">    \n    <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>    \n  </plus-aspect-ratio>  \n</div>",
      "script": ""
    }
  }
}