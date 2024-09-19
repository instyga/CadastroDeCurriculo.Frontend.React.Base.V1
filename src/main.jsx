import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";

import "dayjs/locale/pt-br";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <DatesProvider settings={{ locale: "pt-br" }}>
        <App />
      </DatesProvider>
    </MantineProvider>
  </StrictMode>
);
