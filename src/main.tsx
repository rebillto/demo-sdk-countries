import React from "react";
import ReactDOM from "react-dom/client";
import { RebillProvider } from "rebill-react";

import App from "./modules/app.tsx";
import "./index.css";

const apiKey = "API_KEY_b4301ad1-5a1a-49be-820a-873dd3c6788e";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RebillProvider apiKey={apiKey}>
      <App />
    </RebillProvider>
  </React.StrictMode>
);
