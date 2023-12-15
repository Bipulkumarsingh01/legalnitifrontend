import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import store from "./store.ts";

import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@emotion/react";
import { LNAIThemeConfig } from "./ThemeConfig.tsx";

const clientID =
  "597813127821-vnk8gjr9hpds4p2pmmclargiq2vngsjj.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <GoogleOAuthProvider clientId={clientID}>
    <Provider store={store}>
      <ThemeProvider theme={LNAIThemeConfig}>
        <App />
      </ThemeProvider>
    </Provider>
  </GoogleOAuthProvider>
);
