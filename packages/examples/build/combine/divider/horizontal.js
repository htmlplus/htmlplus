import React from "react";
import { PlusDivider } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero.", /*#__PURE__*/React.createElement(PlusDivider, null), "Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum.", /*#__PURE__*/React.createElement(PlusDivider, null), "Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.");
};

export default {
  "key": "horizontal",
  "ports": {
    "javascript": {
      "template": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero.\n<plus-divider></plus-divider>\nPraesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus.\nSed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum.\n<plus-divider></plus-divider>\r\nNam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl."
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusDivider } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero.\n    <PlusDivider></PlusDivider>\n    Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus.\n  Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum.\n    <PlusDivider></PlusDivider>\n    Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero.\n  <plus-divider></plus-divider>\n  Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus.\n  Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum.\n  <plus-divider></plus-divider>\r\n  Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\r\n</div>",
      "script": ""
    }
  }
}