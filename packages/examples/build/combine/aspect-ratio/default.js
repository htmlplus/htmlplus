import React from "react";
import { PlusAspectRatio, PlusCard } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusAspectRatio, {
    value: "16/9"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    tile: true
  }, "This box will always be 16/9 (unless you put more stuff in it)")));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-aspect-ratio value=\"16/9\">  \n  <plus-card tile>\n    This box will always be 16/9 (unless you put more stuff in it)\n  </plus-card>  \n</plus-aspect-ratio>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusAspectRatio, PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusAspectRatio value=\"16/9\">      \n      <PlusCard tile>\n        This box will always be 16/9 (unless you put more stuff in it)\n      </PlusCard>      \n    </PlusAspectRatio>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-aspect-ratio value=\"16/9\">    \n    <plus-card tile>\n      This box will always be 16/9 (unless you put more stuff in it)\n    </plus-card>    \n  </plus-aspect-ratio>  \n</div>",
      "script": ""
    }
  }
}