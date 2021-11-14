import React, { useState } from "react";
import { PlusIntersection, PlusCard } from "@htmlplus/react";

const App = () => {
  const [intersecting, setIntersecting] = useState(false);

  const onChange = event => {
    setIntersecting(event.detail.isIntersecting);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "preview dock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, intersecting ? 'In Viewport' : 'Out of Viewport'), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(PlusIntersection, {
    onPlusChange: event => onChange(event)
  }, /*#__PURE__*/React.createElement(PlusCard, {
    elevation: "10"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }))));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<div class=\"container\">    \n  <div class=\"status\">      \n          \n  </div>    \n  <div class=\"content\">      \n    <div class=\"spacer\"></div>      \n    <plus-intersection id=\"element1\">        \n      <plus-card elevation=\"10\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      </plus-card>        \n    </plus-intersection>      \n    <div class=\"spacer\"></div>      \n  </div>    \n</div>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React, { useState } from \"react\";\nimport { PlusIntersection, PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  const [intersecting, setIntersecting] = useState(false);\n\n  const onChange = event => {\n    setIntersecting(event.detail.isIntersecting);\n  };\n\n  return <>    \n    <div className=\"container\">      \n      <div className=\"status\">        \n        {intersecting ? 'In Viewport' : 'Out of Viewport'}        \n      </div>      \n      <div className=\"content\">        \n        <div className=\"spacer\"></div>        \n        <PlusIntersection onPlusChange={event => onChange(event)}>          \n          <PlusCard elevation=\"10\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          </PlusCard>          \n        </PlusIntersection>        \n        <div className=\"spacer\"></div>        \n      </div>      \n    </div>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div class=\"container\">    \n    <div class=\"status\">      \n      {{intersecting ? 'In Viewport' : 'Out of Viewport'}}      \n    </div>    \n    <div class=\"content\">      \n      <div class=\"spacer\"></div>      \n      <plus-intersection @plusChange=\"onChange($event)\">        \n        <plus-card elevation=\"10\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </plus-card>        \n      </plus-intersection>      \n      <div class=\"spacer\"></div>      \n    </div>    \n  </div>  \n</div>",
      "script": "export default {\n  data() {\n    return {\n      intersecting: false\n    };\n  },\n\n  methods: {\n    onChange(event) {\n      this.intersecting = event.detail.isIntersecting;\n    }\n\n  }\n};"
    }
  }
}