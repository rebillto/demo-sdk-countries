import React from "react";
import ReactDOM from "react-dom/client";
import { RebillProvider } from "rebill-react";

import App from "./modules/app.tsx";
import "./index.css";

const apiKey = "API_KEY_328372c6-6da5-41d7-a9de-05ef5d97716f";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RebillProvider apiKey={apiKey}>
      <App />
    </RebillProvider>
  </React.StrictMode>
);
