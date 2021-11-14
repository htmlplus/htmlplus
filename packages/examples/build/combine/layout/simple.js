import React from "react";
import { PlusLayout } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusLayout, null, /*#__PURE__*/React.createElement("div", {
    slot: "header"
  }, "Header"), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, "Main"), /*#__PURE__*/React.createElement("div", {
    slot: "footer"
  }, "Footer")));
};

export default {
  "key": "simple",
  "ports": {
    "javascript": {
      "template": "<plus-layout>  \n  <div slot=\"header\">\n    Header\n  </div>  \n  <div class=\"main\">\n    Main\n  </div>  \n  <div slot=\"footer\">\n    Footer\n  </div>  \n</plus-layout>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusLayout } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusLayout>      \n      <div slot=\"header\">\n        Header\n      </div>      \n      <div className=\"main\">\n        Main\n      </div>      \n      <div slot=\"footer\">\n        Footer\n      </div>      \n    </PlusLayout>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-layout>    \n    <div slot=\"header\">\n      Header\n    </div>    \n    <div class=\"main\">\n      Main\n    </div>    \n    <div slot=\"footer\">\n      Footer\n    </div>    \n  </plus-layout>  \n</div>",
      "script": ""
    }
  }
}