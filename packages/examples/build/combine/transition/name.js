import React from "react";
import { PlusGrid, PlusGridItem, PlusTransition } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    justifyContent: "evenly",
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite"
  }, "HTMLPLUS")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-out",
    repeat: "infinite"
  }, "HTMLPLUS"))));
};

export default {
  "key": "name",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">  \n  <plus-grid-item xs=\"12\" sm=\"auto\">    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"auto\">    \n    <plus-transition name=\"fade-out\" repeat=\"infinite\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusTransition } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid justifyContent=\"evenly\" gutter=\"md\">      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <PlusTransition name=\"fade-in\" repeat=\"infinite\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <PlusTransition name=\"fade-out\" repeat=\"infinite\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify-content=\"evenly\" gutter=\"md\">    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <plus-transition name=\"fade-in\" repeat=\"infinite\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <plus-transition name=\"fade-out\" repeat=\"infinite\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}