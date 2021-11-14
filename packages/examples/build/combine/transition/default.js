import React from "react";
import { PlusTransition } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite"
  }, "HTMLPLUS")));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<div>  \n  <plus-transition name=\"fade-in\" repeat=\"infinite\">\n    HTMLPLUS\n  </plus-transition>  \n</div>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusTransition } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <div>      \n      <PlusTransition name=\"fade-in\" repeat=\"infinite\">\n        HTMLPLUS\n      </PlusTransition>      \n    </div>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\">\n      HTMLPLUS\n    </plus-transition>    \n  </div>  \n</div>",
      "script": ""
    }
  }
}