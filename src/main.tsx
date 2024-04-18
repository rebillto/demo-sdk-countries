import React from "react";
import ReactDOM from "react-dom/client";
import { RebillProvider } from "rebill-react";

import App from "./modules/app.tsx";
import "./index.css";

const apiKey = "API_KEY_125007df-ff8f-4e2c-8888-865a8dc95b33";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RebillProvider apiKey={apiKey}>
      <App />
    </RebillProvider>
  </React.StrictMode>
);
