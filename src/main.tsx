import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules/app.tsx";
import "./index.css";
import { RebillProvider } from "rebill-react";

const apiKey = "API_KEY_328372c6-6da5-41d7-a9de-05ef5d97716f";
const rebillId = "rebill";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RebillProvider apiKey={apiKey} rebillId={rebillId}>
      <App />
    </RebillProvider>
  </React.StrictMode>
);
