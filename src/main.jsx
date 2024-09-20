import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { ModalsProvider } from "@mantine/modals";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

dayjs.locale("pt-br");
dayjs.extend(customParseFormat);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <ModalsProvider>
        <DatesProvider settings={{ locale: "pt-br" }}>
          <App />
        </DatesProvider>
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>
);
