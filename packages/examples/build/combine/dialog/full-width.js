import React from "react";
import { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogBody } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusDialogToggler, {
    connector: "dialog-full-width"
  }, "Open")), /*#__PURE__*/React.createElement(PlusDialog, {
    className: "fade",
    connector: "dialog-full-width",
    fullWidth: true
  }, /*#__PURE__*/React.createElement(PlusDialogContent, null, /*#__PURE__*/React.createElement(PlusDialogBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))));
};

export default {
  "key": "full-width",
  "ports": {
    "javascript": {
      "template": "<div>    \n  <plus-dialog-toggler connector=\"dialog-full-width\">\n    Open\n  </plus-dialog-toggler>    \n</div>  \n<plus-dialog class=\"fade\" connector=\"dialog-full-width\" full-width>    \n  <plus-dialog-content>      \n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>      \n  </plus-dialog-content>    \n</plus-dialog>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogBody } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <div>      \n      <PlusDialogToggler connector=\"dialog-full-width\">\n        Open\n      </PlusDialogToggler>      \n    </div>    \n    <PlusDialog className=\"fade\" connector=\"dialog-full-width\" fullWidth>      \n      <PlusDialogContent>        \n        <PlusDialogBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </PlusDialogBody>        \n      </PlusDialogContent>      \n    </PlusDialog>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <plus-dialog-toggler connector=\"dialog-full-width\">\n      Open\n    </plus-dialog-toggler>    \n  </div>  \n  <plus-dialog class=\"fade\" connector=\"dialog-full-width\" full-width>    \n    <plus-dialog-content>      \n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>      \n    </plus-dialog-content>    \n  </plus-dialog>  \n</div>",
      "script": ""
    }
  }
}