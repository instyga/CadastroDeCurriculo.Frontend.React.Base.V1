import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import "dayjs/locale/pt-br";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

dayjs.locale("pt-br");
dayjs.extend(customParseFormat);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <DatesProvider settings={{ locale: "pt-br" }}>
        <App />
      </DatesProvider>
    </MantineProvider>
  </StrictMode>
);
