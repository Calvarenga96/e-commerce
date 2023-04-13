import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ComponentsProvider } from "./context/ComponentsContext";

import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ComponentsProvider>
            <App />
        </ComponentsProvider>
    </React.StrictMode>
);
