import React from "react";
import { PlusGrid, PlusGridItem, PlusTooltip } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Top", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "top"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Top Start", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "top-start"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Top End", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "top-end"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Right", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "right"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Right Start", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "right-start"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Right End", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "right-end"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Bottom", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "bottom"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Bottom Start", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "bottom-start"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Bottom End", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "bottom-end"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Left", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "left"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Left Start", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "left-start"
  }, "Tooltip"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "4"
  }, /*#__PURE__*/React.createElement("button", null, "Left End", /*#__PURE__*/React.createElement(PlusTooltip, {
    placement: "left-end"
  }, "Tooltip")))));
};

export default {
  "key": "placement",
  "ports": {
    "javascript": {
      "template": "<plus-grid gutter=\"md\">  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Top\n      <plus-tooltip placement=\"top\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Top Start\n      <plus-tooltip placement=\"top-start\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Top End\n      <plus-tooltip placement=\"top-end\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Right\n      <plus-tooltip placement=\"right\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Right Start\n      <plus-tooltip placement=\"right-start\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Right End\n      <plus-tooltip placement=\"right-end\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Bottom\n      <plus-tooltip placement=\"bottom\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Bottom Start\n      <plus-tooltip placement=\"bottom-start\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Bottom End\n      <plus-tooltip placement=\"bottom-end\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Left\n      <plus-tooltip placement=\"left\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Left Start\n      <plus-tooltip placement=\"left-start\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"4\">    \n    <button>\n      Left End\n      <plus-tooltip placement=\"left-end\">\n        Tooltip\n      </plus-tooltip>      \n    </button>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusTooltip } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid gutter=\"md\">      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Top\n          <PlusTooltip placement=\"top\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Top Start\n          <PlusTooltip placement=\"top-start\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Top End\n          <PlusTooltip placement=\"top-end\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Right\n          <PlusTooltip placement=\"right\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Right Start\n          <PlusTooltip placement=\"right-start\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Right End\n          <PlusTooltip placement=\"right-end\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Bottom\n          <PlusTooltip placement=\"bottom\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Bottom Start\n          <PlusTooltip placement=\"bottom-start\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Bottom End\n          <PlusTooltip placement=\"bottom-end\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Left\n          <PlusTooltip placement=\"left\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Left Start\n          <PlusTooltip placement=\"left-start\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"4\">        \n        <button>\n          Left End\n          <PlusTooltip placement=\"left-end\">\n            Tooltip\n          </PlusTooltip>          \n        </button>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid gutter=\"md\">    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Top\n        <plus-tooltip placement=\"top\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Top Start\n        <plus-tooltip placement=\"top-start\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Top End\n        <plus-tooltip placement=\"top-end\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Right\n        <plus-tooltip placement=\"right\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Right Start\n        <plus-tooltip placement=\"right-start\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Right End\n        <plus-tooltip placement=\"right-end\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Bottom\n        <plus-tooltip placement=\"bottom\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Bottom Start\n        <plus-tooltip placement=\"bottom-start\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Bottom End\n        <plus-tooltip placement=\"bottom-end\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Left\n        <plus-tooltip placement=\"left\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Left Start\n        <plus-tooltip placement=\"left-start\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"4\">      \n      <button>\n        Left End\n        <plus-tooltip placement=\"left-end\">\n          Tooltip\n        </plus-tooltip>        \n      </button>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}