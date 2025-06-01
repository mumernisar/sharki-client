import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppKitProvider } from "./AppKitProvider.jsx";
import App from "./App.jsx";

import "./assets/scss/main.scss";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </StrictMode>
);
