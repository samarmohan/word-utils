import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
