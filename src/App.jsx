import { AppShell } from "@mantine/core";
import { AppFooter } from "./components/app-footer";
import { AppHeader } from "./components/app-header";
import { Home } from "./pages/home";

function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 80 }}
      padding="md"
      bg="gray.0"
    >
      <AppShell.Header bg="blue">
        <AppHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Home />
      </AppShell.Main>
      <AppShell.Footer>
        <AppFooter />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
