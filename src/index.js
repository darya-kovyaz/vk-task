import "./style.css";
import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ConfigProvider appearance="light">
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>
);
