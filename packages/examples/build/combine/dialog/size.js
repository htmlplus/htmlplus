import React, { useState } from "react";
import { PlusGrid, PlusGridItem, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from "@htmlplus/react";

const App = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('md');

  const hide = () => {
    setOpen(false);
  };

  const show = size => {
    setSize(size);
    setOpen(true);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    justifyContent: "center",
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => show('sm')
  }, "Small dialog")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => show('lg')
  }, "Large dialog")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => show('xl')
  }, "Extra large dialog"))), /*#__PURE__*/React.createElement(PlusDialog, {
    className: "fade",
    open: open,
    size: size,
    onPlusClose: () => hide()
  }, /*#__PURE__*/React.createElement(PlusDialogContent, null, /*#__PURE__*/React.createElement(PlusDialogHeader, null, "Dialog Title"), /*#__PURE__*/React.createElement(PlusDialogBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/React.createElement(PlusDialogFooter, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => hide()
  }, "Close")))));
};

export default {
  "key": "size",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify-content=\"center\" gutter=\"md\">    \n  <plus-grid-item xs=\"12\" sm=\"auto\">      \n    <button id=\"element1\">\n      Small dialog\n    </button>      \n  </plus-grid-item>    \n  <plus-grid-item xs=\"12\" sm=\"auto\">      \n    <button id=\"element2\">\n      Large dialog\n    </button>      \n  </plus-grid-item>    \n  <plus-grid-item xs=\"12\" sm=\"auto\">      \n    <button id=\"element3\">\n      Extra large dialog\n    </button>      \n  </plus-grid-item>    \n</plus-grid>  \n<plus-dialog id=\"element4\" class=\"fade\">    \n  <plus-dialog-content>      \n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>      \n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>      \n    <plus-dialog-footer>        \n      <button id=\"element5\">\n        Close\n      </button>        \n    </plus-dialog-footer>      \n  </plus-dialog-content>    \n</plus-dialog>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React, { useState } from \"react\";\nimport { PlusGrid, PlusGridItem, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from \"@htmlplus/react\";\n\nconst App = () => {\n  const [open, setOpen] = useState(false);\n  const [size, setSize] = useState('md');\n\n  const hide = () => {\n    setOpen(false);\n  };\n\n  const show = size => {\n    setSize(size);\n    setOpen(true);\n  };\n\n  return <>    \n    <PlusGrid justifyContent=\"center\" gutter=\"md\">      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <button onClick={() => show('sm')}>\n          Small dialog\n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <button onClick={() => show('lg')}>\n          Large dialog\n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <button onClick={() => show('xl')}>\n          Extra large dialog\n        </button>        \n      </PlusGridItem>      \n    </PlusGrid>    \n    <PlusDialog className=\"fade\" open={open} size={size} onPlusClose={() => hide()}>      \n      <PlusDialogContent>        \n        <PlusDialogHeader>\n          Dialog Title\n        </PlusDialogHeader>        \n        <PlusDialogBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </PlusDialogBody>        \n        <PlusDialogFooter>          \n          <button onClick={() => hide()}>\n            Close\n          </button>          \n        </PlusDialogFooter>        \n      </PlusDialogContent>      \n    </PlusDialog>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify-content=\"center\" gutter=\"md\">    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <button @click=\"show('sm')\">\n        Small dialog\n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <button @click=\"show('lg')\">\n        Large dialog\n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <button @click=\"show('xl')\">\n        Extra large dialog\n      </button>      \n    </plus-grid-item>    \n  </plus-grid>  \n  <plus-dialog class=\"fade\" :open=\"open\" :size=\"size\" @plusClose=\"hide()\">    \n    <plus-dialog-content>      \n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>      \n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>      \n      <plus-dialog-footer>        \n        <button @click=\"hide()\">\n          Close\n        </button>        \n      </plus-dialog-footer>      \n    </plus-dialog-content>    \n  </plus-dialog>  \n</div>",
      "script": "export default {\n  data() {\n    return {\n      open: false,\n      size: 'md'\n    };\n  },\n\n  methods: {\n    hide() {\n      this.open = false;\n    },\n\n    show(size) {\n      this.size = size;\n      this.open = true;\n    }\n\n  }\n};"
    }
  }
}