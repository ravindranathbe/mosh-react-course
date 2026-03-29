import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <App />
        </div>
      </div>
    </div>
  </StrictMode>,
);
