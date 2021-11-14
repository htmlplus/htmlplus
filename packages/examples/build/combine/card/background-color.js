import React from "react";
import { PlusGrid, PlusGridItem, PlusCard } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    justifyContent: "evenly",
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    className: "pink"
  })), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    className: "yellow"
  })), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    className: "blue"
  }))));
};

export default {
  "key": "background-color",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">  \n  <plus-grid-item xs=\"12\" sm=\"auto\">    \n    <plus-card class=\"pink\"></plus-card>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"auto\">    \n    <plus-card class=\"yellow\"></plus-card>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"auto\">    \n    <plus-card class=\"blue\"></plus-card>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid justifyContent=\"evenly\" gutter=\"md\">      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <PlusCard className=\"pink\"></PlusCard>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <PlusCard className=\"yellow\"></PlusCard>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"auto\">        \n        <PlusCard className=\"blue\"></PlusCard>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid justify-content=\"evenly\" gutter=\"md\">    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <plus-card class=\"pink\"></plus-card>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <plus-card class=\"yellow\"></plus-card>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"auto\">      \n      <plus-card class=\"blue\"></plus-card>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}