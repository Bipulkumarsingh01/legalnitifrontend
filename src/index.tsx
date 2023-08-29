import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import store from "./store.ts";

import "./globals.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
