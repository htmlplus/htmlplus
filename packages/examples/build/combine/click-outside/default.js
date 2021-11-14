import React, { useState } from "react";
import { PlusClickOutside, PlusCard } from "@htmlplus/react";

const App = () => {
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);

  const onClick = () => {
    setInside(inside + 1);
  };

  const onClickOutside = () => {
    setOutside(outside + 1);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusClickOutside, {
    onClick: () => onClick(),
    onPlusClickOutside: () => onClickOutside()
  }, /*#__PURE__*/React.createElement(PlusCard, {
    elevation: "10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, inside), " time(s) inside clicked", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, outside), " time(s) outside clicked"))));
};

export default {
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-click-outside id=\"element1\">  \n  <plus-card elevation=\"10\">    \n    <div>      \n      <b></b>      time(s) inside clicked\n      <br />      \n      <b></b>      time(s) outside clicked\n    </div>    \n  </plus-card>  \n</plus-click-outside>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React, { useState } from \"react\";\nimport { PlusClickOutside, PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  const [inside, setInside] = useState(0);\n  const [outside, setOutside] = useState(0);\n\n  const onClick = () => {\n    setInside(inside + 1);\n  };\n\n  const onClickOutside = () => {\n    setOutside(outside + 1);\n  };\n\n  return <>    \n    <PlusClickOutside onClick={() => onClick()} onPlusClickOutside={() => onClickOutside()}>      \n      <PlusCard elevation=\"10\">        \n        <div>          \n          <b>{inside}</b>          time(s) inside clicked\n          <br />          \n          <b>{outside}</b>          time(s) outside clicked\n        </div>        \n      </PlusCard>      \n    </PlusClickOutside>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-click-outside @click=\"onClick()\" @plusClickOutside=\"onClickOutside()\">    \n    <plus-card elevation=\"10\">      \n      <div>        \n        <b>{{inside}}</b>        time(s) inside clicked\n        <br />        \n        <b>{{outside}}</b>        time(s) outside clicked\n      </div>      \n    </plus-card>    \n  </plus-click-outside>  \n</div>",
      "script": "export default {\n  data() {\n    return {\n      inside: 0,\n      outside: 0\n    };\n  },\n\n  methods: {\n    onClick() {\n      this.inside = this.inside + 1;\n    },\n\n    onClickOutside() {\n      this.outside = this.outside + 1;\n    }\n\n  }\n};"
    }
  }
}