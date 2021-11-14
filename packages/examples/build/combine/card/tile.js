import React from "react";
import { PlusGrid, PlusGridItem, PlusCard } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview dock"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusGrid, {
    justifyContent: "evenly",
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    tile: true
  })), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    tile: true,
    outlined: true
  })), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "auto"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    tile: true,
    elevation: "5"
  })))));
};

export default {
  "key": "tile",
  "ports": {
    "javascript": {
      "template": "<div>    \n  <plus-grid justify-content=\"evenly\" gutter=\"md\">      \n    <plus-grid-item xs=\"12\" sm=\"auto\">        \n      <plus-card tile></plus-card>        \n    </plus-grid-item>      \n    <plus-grid-item xs=\"12\" sm=\"auto\">        \n      <plus-card tile outlined></plus-card>        \n    </plus-grid-item>      \n    <plus-grid-item xs=\"12\" sm=\"auto\">        \n      <plus-card tile elevation=\"5\"></plus-card>        \n    </plus-grid-item>      \n  </plus-grid>    \n</div>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <div>      \n      <PlusGrid justifyContent=\"evenly\" gutter=\"md\">        \n        <PlusGridItem xs=\"12\" sm=\"auto\">          \n          <PlusCard tile></PlusCard>          \n        </PlusGridItem>        \n        <PlusGridItem xs=\"12\" sm=\"auto\">          \n          <PlusCard tile outlined></PlusCard>          \n        </PlusGridItem>        \n        <PlusGridItem xs=\"12\" sm=\"auto\">          \n          <PlusCard tile elevation=\"5\"></PlusCard>          \n        </PlusGridItem>        \n      </PlusGrid>      \n    </div>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <plus-grid justify-content=\"evenly\" gutter=\"md\">      \n      <plus-grid-item xs=\"12\" sm=\"auto\">        \n        <plus-card tile></plus-card>        \n      </plus-grid-item>      \n      <plus-grid-item xs=\"12\" sm=\"auto\">        \n        <plus-card tile outlined></plus-card>        \n      </plus-grid-item>      \n      <plus-grid-item xs=\"12\" sm=\"auto\">        \n        <plus-card tile elevation=\"5\"></plus-card>        \n      </plus-grid-item>      \n    </plus-grid>    \n  </div>  \n</div>",
      "script": ""
    }
  }
}