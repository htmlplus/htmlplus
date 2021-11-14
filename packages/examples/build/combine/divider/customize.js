import React from "react";
import { PlusGrid, PlusGridItem, PlusDivider } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    alignItems: "center",
    justifyContent: "evenly"
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus."), /*#__PURE__*/React.createElement(PlusDivider, {
    vertical: true
  }), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "5"
  }, "Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.")));
};

export default {
  "key": "customize",
  "ports": {
    "javascript": {
      "template": "<plus-grid align-items=\"center\" justify-content=\"evenly\">  \n  <plus-grid-item xs=\"5\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend\n    ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus,\n    gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris\n    aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus.\n  </plus-grid-item>  \n  <plus-divider vertical></plus-divider>  \n  <plus-grid-item xs=\"5\">\n    Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida.\n    Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel\n    accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit\n    imperdiet, gravida urna tempus, fringilla nisl.\n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem, PlusDivider } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid alignItems=\"center\" justifyContent=\"evenly\">      \n      <PlusGridItem xs=\"5\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend\n    ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus,\n    gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris\n    aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus.\n      </PlusGridItem>      \n      <PlusDivider vertical></PlusDivider>      \n      <PlusGridItem xs=\"5\">\n        Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida.\n    Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel\n    accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit\n    imperdiet, gravida urna tempus, fringilla nisl.\n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid align-items=\"center\" justify-content=\"evenly\">    \n    <plus-grid-item xs=\"5\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend\n    ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus,\n    gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris\n    aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus.\n    </plus-grid-item>    \n    <plus-divider vertical></plus-divider>    \n    <plus-grid-item xs=\"5\">\n      Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida.\n    Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel\n    accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit\n    imperdiet, gravida urna tempus, fringilla nisl.\n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}