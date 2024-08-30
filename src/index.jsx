import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { theme } from "./Theme";
import 'react-quill/dist/quill.snow.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
