import React from "react";
import { PlusGrid, PlusGridItem, PlusCropper } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6"
  }, /*#__PURE__*/React.createElement(PlusCropper, {
    viewportShape: "rect",
    src: "/assets/images/panda.jpg"
  })), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12",
    sm: "6"
  }, /*#__PURE__*/React.createElement(PlusCropper, {
    viewportShape: "round",
    src: "/assets/images/panda.jpg"
  }))));
};

export default {
  "key": "viewport",
  "ports": {
    "javascript": {
      "template": "<plus-grid gutter=\"md\">  \n  <plus-grid-item xs=\"12\" sm=\"6\">    \n    <plus-cropper viewport-shape=\"rect\" src=\"/assets/images/panda.jpg\"></plus-cropper>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"12\" sm=\"6\">    \n    <plus-cropper viewport-shape=\"round\" src=\"/assets/images/panda.jpg\"></plus-cropper>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusCropper } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid gutter=\"md\">      \n      <PlusGridItem xs=\"12\" sm=\"6\">        \n        <PlusCropper viewportShape=\"rect\" src=\"/assets/images/panda.jpg\"></PlusCropper>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"12\" sm=\"6\">        \n        <PlusCropper viewportShape=\"round\" src=\"/assets/images/panda.jpg\"></PlusCropper>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid gutter=\"md\">    \n    <plus-grid-item xs=\"12\" sm=\"6\">      \n      <plus-cropper viewport-shape=\"rect\" src=\"/assets/images/panda.jpg\"></plus-cropper>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"12\" sm=\"6\">      \n      <plus-cropper viewport-shape=\"round\" src=\"/assets/images/panda.jpg\"></plus-cropper>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}