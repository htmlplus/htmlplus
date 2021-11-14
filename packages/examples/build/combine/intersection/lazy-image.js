import React from "react";
import { PlusIntersection, PlusCard, PlusSpinner } from "@htmlplus/react";

const App = () => {
  const onChange = event => {
    if (!event.detail.isIntersecting) return;
    setTimeout(() => {
      const image = event.target.querySelector('img');
      const spinner = event.target.querySelector('plus-spinner');
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.removeAttribute('data-hidden');
      spinner.setAttribute('data-hidden', 'true');
    }, 1000);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "preview dock"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusIntersection, {
    once: true,
    onPlusChange: event => onChange(event)
  }, /*#__PURE__*/React.createElement(PlusCard, {
    elevation: "10"
  }, /*#__PURE__*/React.createElement(PlusSpinner, null), /*#__PURE__*/React.createElement("img", {
    "data-hidden": "true",
    "data-src": "https://placekitten.com/200/200",
    alt: "Lazy Image"
  })))));
};

export default {
  "key": "lazy-image",
  "ports": {
    "javascript": {
      "template": "<div>    \n  <plus-intersection id=\"element1\" once>      \n    <plus-card elevation=\"10\">        \n      <plus-spinner></plus-spinner>        \n      <img data-hidden=\"true\" data-src=\"https://placekitten.com/200/200\" alt=\"Lazy Image\" />        \n    </plus-card>      \n  </plus-intersection>    \n</div>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusIntersection, PlusCard, PlusSpinner } from \"@htmlplus/react\";\n\nconst App = () => {\n  const onChange = event => {\n    if (!event.detail.isIntersecting) return;\n    setTimeout(() => {\n      const image = event.target.querySelector('img');\n      const spinner = event.target.querySelector('plus-spinner');\n      const src = image.getAttribute('data-src');\n      image.setAttribute('src', src);\n      image.removeAttribute('data-hidden');\n      spinner.setAttribute('data-hidden', 'true');\n    }, 1000);\n  };\n\n  return <>    \n    <div>      \n      <PlusIntersection once onPlusChange={event => onChange(event)}>        \n        <PlusCard elevation=\"10\">          \n          <PlusSpinner></PlusSpinner>          \n          <img data-hidden=\"true\" data-src=\"https://placekitten.com/200/200\" alt=\"Lazy Image\" />          \n        </PlusCard>        \n      </PlusIntersection>      \n    </div>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <plus-intersection once @plusChange=\"onChange($event)\">      \n      <plus-card elevation=\"10\">        \n        <plus-spinner></plus-spinner>        \n        <img data-hidden=\"true\" data-src=\"https://placekitten.com/200/200\" alt=\"Lazy Image\" />        \n      </plus-card>      \n    </plus-intersection>    \n  </div>  \n</div>",
      "script": "export default {\n  methods: {\n    onChange(event) {\n      if (!event.detail.isIntersecting) return;\n      setTimeout(() => {\n        const image = event.target.querySelector('img');\n        const spinner = event.target.querySelector('plus-spinner');\n        const src = image.getAttribute('data-src');\n        image.setAttribute('src', src);\n        image.removeAttribute('data-hidden');\n        spinner.setAttribute('data-hidden', 'true');\n      }, 1000);\n    }\n\n  }\n};"
    }
  }
}