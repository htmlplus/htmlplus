import React from "react";
import { PlusGrid, PlusGridItem, PlusAspectRatio } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, null, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6"
  }, /*#__PURE__*/React.createElement(PlusGrid, null, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12"
  }, /*#__PURE__*/React.createElement(PlusAspectRatio, {
    value: "3/2",
    className: "ratio-one"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box one"
  }, "3/2"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12"
  }, /*#__PURE__*/React.createElement(PlusAspectRatio, {
    value: "16/9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box two"
  }, "16/9"))))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6"
  }, /*#__PURE__*/React.createElement(PlusGrid, null, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "6"
  }, /*#__PURE__*/React.createElement(PlusAspectRatio, {
    value: "1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box three"
  }, "1/1"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "6",
    alignSelf: "end"
  }, /*#__PURE__*/React.createElement(PlusAspectRatio, {
    value: "4/3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box four"
  }, "4/3"))), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12"
  }, /*#__PURE__*/React.createElement(PlusAspectRatio, {
    value: "18/6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box five"
  }, "18/6")))))));
};

export default {
  "key": "more",
  "ports": {
    "javascript": {
      "template": "<plus-grid>  \n  <plus-grid-item xs=\"12\" sm=\"6\">    \n    <plus-grid>      \n      <plus-grid-item xs=\"12\">        \n        <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">          \n          <div class=\"box one\">\n            3/2\n          </div>          \n        </plus-aspect-ratio>        \n      </plus-grid-item>      \n      <plus-grid-item xs=\"12\">        \n        <plus-aspect-ratio value=\"16/9\">          \n          <div class=\"box two\">\n            16/9\n          </div>          \n        </plus-aspect-ratio>        \n      </plus-grid-item>      \n    </plus-grid>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\">    \n    <plus-grid>      \n      <plus-grid-item xs=\"6\">        \n        <plus-aspect-ratio value=\"1\">          \n          <div class=\"box three\">\n            1/1\n          </div>          \n        </plus-aspect-ratio>        \n      </plus-grid-item>      \n      <plus-grid-item xs=\"6\" align-self=\"end\">        \n        <plus-aspect-ratio value=\"4/3\">          \n          <div class=\"box four\">\n            4/3\n          </div>          \n        </plus-aspect-ratio>        \n      </plus-grid-item>      \n      <plus-grid-item xs=\"12\">        \n        <plus-aspect-ratio value=\"18/6\">          \n          <div class=\"box five\">\n            18/6\n          </div>          \n        </plus-aspect-ratio>        \n      </plus-grid-item>      \n    </plus-grid>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusAspectRatio } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid>      \n      <PlusGridItem xs=\"12\" sm=\"6\">        \n        <PlusGrid>          \n          <PlusGridItem xs=\"12\">            \n            <PlusAspectRatio value=\"3/2\" className=\"ratio-one\">              \n              <div className=\"box one\">\n                3/2\n              </div>              \n            </PlusAspectRatio>            \n          </PlusGridItem>          \n          <PlusGridItem xs=\"12\">            \n            <PlusAspectRatio value=\"16/9\">              \n              <div className=\"box two\">\n                16/9\n              </div>              \n            </PlusAspectRatio>            \n          </PlusGridItem>          \n        </PlusGrid>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\">        \n        <PlusGrid>          \n          <PlusGridItem xs=\"6\">            \n            <PlusAspectRatio value=\"1\">              \n              <div className=\"box three\">\n                1/1\n              </div>              \n            </PlusAspectRatio>            \n          </PlusGridItem>          \n          <PlusGridItem xs=\"6\" alignSelf=\"end\">            \n            <PlusAspectRatio value=\"4/3\">              \n              <div className=\"box four\">\n                4/3\n              </div>              \n            </PlusAspectRatio>            \n          </PlusGridItem>          \n          <PlusGridItem xs=\"12\">            \n            <PlusAspectRatio value=\"18/6\">              \n              <div className=\"box five\">\n                18/6\n              </div>              \n            </PlusAspectRatio>            \n          </PlusGridItem>          \n        </PlusGrid>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid>    \n    <plus-grid-item xs=\"12\" sm=\"6\">      \n      <plus-grid>        \n        <plus-grid-item xs=\"12\">          \n          <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">            \n            <div class=\"box one\">\n              3/2\n            </div>            \n          </plus-aspect-ratio>          \n        </plus-grid-item>        \n        <plus-grid-item xs=\"12\">          \n          <plus-aspect-ratio value=\"16/9\">            \n            <div class=\"box two\">\n              16/9\n            </div>            \n          </plus-aspect-ratio>          \n        </plus-grid-item>        \n      </plus-grid>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\">      \n      <plus-grid>        \n        <plus-grid-item xs=\"6\">          \n          <plus-aspect-ratio value=\"1\">            \n            <div class=\"box three\">\n              1/1\n            </div>            \n          </plus-aspect-ratio>          \n        </plus-grid-item>        \n        <plus-grid-item xs=\"6\" align-self=\"end\">          \n          <plus-aspect-ratio value=\"4/3\">            \n            <div class=\"box four\">\n              4/3\n            </div>            \n          </plus-aspect-ratio>          \n        </plus-grid-item>        \n        <plus-grid-item xs=\"12\">          \n          <plus-aspect-ratio value=\"18/6\">            \n            <div class=\"box five\">\n              18/6\n            </div>            \n          </plus-aspect-ratio>          \n        </plus-grid-item>        \n      </plus-grid>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}