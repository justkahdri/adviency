import React from "react";
import {render} from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import theme from "./theme";
import App from "./App";

import "@fontsource/mountains-of-christmas/700.css";
import "@fontsource/open-sans/400.css";

const rootElement = document.getElementById("root");

render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement,
);
