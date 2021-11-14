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
    sm: "6",
    md: "4",
    xl: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite",
    duration: "slower"
  }, "HTMLPLUS")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6",
    md: "4",
    xl: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite",
    duration: "slow"
  }, "HTMLPLUS")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6",
    md: "4",
    xl: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite",
    duration: "normal"
  }, "HTMLPLUS")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6",
    md: "4",
    xl: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite",
    duration: "fast"
  }, "HTMLPLUS")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6",
    md: "4",
    xl: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite",
    duration: "faster"
  }, "HTMLPLUS")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6",
    md: "4",
    xl: "auto"
  }, /*#__PURE__*/React.createElement(PlusTransition, {
    name: "fade-in",
    repeat: "infinite",
    duration: "2.5s"
  }, "HTMLPLUS"))));
};

export default {
  "key": "duration",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">  \n  <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"slower\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"slow\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"normal\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"fast\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"faster\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">    \n    <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"2.5s\">\n      HTMLPLUS\n    </plus-transition>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusTransition } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid justifyContent=\"evenly\" gutter=\"md\">      \n      <PlusGridItem xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">        \n        <PlusTransition name=\"fade-in\" repeat=\"infinite\" duration=\"slower\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">        \n        <PlusTransition name=\"fade-in\" repeat=\"infinite\" duration=\"slow\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">        \n        <PlusTransition name=\"fade-in\" repeat=\"infinite\" duration=\"normal\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">        \n        <PlusTransition name=\"fade-in\" repeat=\"infinite\" duration=\"fast\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">        \n        <PlusTransition name=\"fade-in\" repeat=\"infinite\" duration=\"faster\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">        \n        <PlusTransition name=\"fade-in\" repeat=\"infinite\" duration=\"2.5s\">\n          HTMLPLUS\n        </PlusTransition>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify-content=\"evenly\" gutter=\"md\">    \n    <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">      \n      <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"slower\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">      \n      <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"slow\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">      \n      <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"normal\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">      \n      <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"fast\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">      \n      <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"faster\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\" md=\"4\" xl=\"auto\">      \n      <plus-transition name=\"fade-in\" repeat=\"infinite\" duration=\"2.5s\">\n        HTMLPLUS\n      </plus-transition>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}