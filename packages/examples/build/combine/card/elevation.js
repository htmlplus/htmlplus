import React, { useState } from "react";
import { PlusCard } from "@htmlplus/react";

const App = () => {
  const [elevation, setElevation] = useState('12');

  const onChange = event => {
    setElevation(event.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusCard, {
    elevation: elevation
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "range",
    value: elevation,
    min: "1",
    max: "24",
    onChange: event => onChange(event)
  }));
};

export default {
  "key": "elevation",
  "ports": {
    "javascript": {
      "template": "<plus-card></plus-card>  \n<br />  \n<input id=\"element1\" type=\"range\" min=\"1\" max=\"24\" />"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React, { useState } from \"react\";\nimport { PlusCard } from \"@htmlplus/react\";\n\nconst App = () => {\n  const [elevation, setElevation] = useState('12');\n\n  const onChange = event => {\n    setElevation(event.target.value);\n  };\n\n  return <>    \n    <PlusCard elevation={elevation}></PlusCard>    \n    <br />    \n    <input type=\"range\" value={elevation} min=\"1\" max=\"24\" onChange={event => onChange(event)} />    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-card :elevation=\"elevation\"></plus-card>  \n  <br />  \n  <input type=\"range\" :value=\"elevation\" min=\"1\" max=\"24\" @change=\"onChange($event)\" />  \n</div>",
      "script": "export default {\n  data() {\n    return {\n      elevation: '12'\n    };\n  },\n\n  methods: {\n    onChange(event) {\n      this.elevation = event.target.value;\n    }\n\n  }\n};"
    }
  }
}