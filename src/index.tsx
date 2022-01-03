import "@fontsource/mountains-of-christmas/700.css";
import "@fontsource/open-sans/400.css";

import React from "react";
import {render} from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import App from "./App";
import theme from "./theme";
import GiftsProvider from "./contexts/GiftsProvider";

const rootElement = document.getElementById("root");

render(
  <ChakraProvider theme={theme}>
    <GiftsProvider>
      <App />
    </GiftsProvider>
  </ChakraProvider>,
  rootElement,
);
