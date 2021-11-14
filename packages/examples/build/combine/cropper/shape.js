import React from "react";
import { PlusGrid, PlusGridItem, PlusCropper } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "6"
  }, /*#__PURE__*/React.createElement(PlusCropper, {
    shape: "rectangle",
    aspectRatio: "2",
    src: "/assets/images/panda.jpg"
  })), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "6"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    gutter: "md"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12"
  }, /*#__PURE__*/React.createElement(PlusCropper, {
    shape: "square",
    src: "/assets/images/panda.jpg"
  })), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "12"
  }, /*#__PURE__*/React.createElement(PlusCropper, {
    shape: "circle",
    src: "/assets/images/panda.jpg"
  }))))));
};

export default {
  "key": "shape",
  "ports": {
    "javascript": {
      "template": "<plus-grid gutter=\"md\">  \n  <plus-grid-item xs=\"6\">    \n    <plus-cropper shape=\"rectangle\" aspect-ratio=\"2\" src=\"/assets/images/panda.jpg\"></plus-cropper>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"6\">    \n    <plus-grid gutter=\"md\">      \n      <plus-grid-item xs=\"12\">        \n        <plus-cropper shape=\"square\" src=\"/assets/images/panda.jpg\"></plus-cropper>        \n      </plus-grid-item>      \n      <plus-grid-item xs=\"12\">        \n        <plus-cropper shape=\"circle\" src=\"/assets/images/panda.jpg\"></plus-cropper>        \n      </plus-grid-item>      \n    </plus-grid>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusCropper } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid gutter=\"md\">      \n      <PlusGridItem xs=\"6\">        \n        <PlusCropper shape=\"rectangle\" aspectRatio=\"2\" src=\"/assets/images/panda.jpg\"></PlusCropper>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"6\">        \n        <PlusGrid gutter=\"md\">          \n          <PlusGridItem xs=\"12\">            \n            <PlusCropper shape=\"square\" src=\"/assets/images/panda.jpg\"></PlusCropper>            \n          </PlusGridItem>          \n          <PlusGridItem xs=\"12\">            \n            <PlusCropper shape=\"circle\" src=\"/assets/images/panda.jpg\"></PlusCropper>            \n          </PlusGridItem>          \n        </PlusGrid>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid gutter=\"md\">    \n    <plus-grid-item xs=\"6\">      \n      <plus-cropper shape=\"rectangle\" aspect-ratio=\"2\" src=\"/assets/images/panda.jpg\"></plus-cropper>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"6\">      \n      <plus-grid gutter=\"md\">        \n        <plus-grid-item xs=\"12\">          \n          <plus-cropper shape=\"square\" src=\"/assets/images/panda.jpg\"></plus-cropper>          \n        </plus-grid-item>        \n        <plus-grid-item xs=\"12\">          \n          <plus-cropper shape=\"circle\" src=\"/assets/images/panda.jpg\"></plus-cropper>          \n        </plus-grid-item>        \n      </plus-grid>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}