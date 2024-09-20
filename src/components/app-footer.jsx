import { Button, Container, Group } from "@mantine/core";
import { openConfirmSaveModal } from "../helpers/open-confirm-save-modal";

export const AppFooter = () => {
  return (
    <Container size="lg">
      <Group my="lg" position="right">
        <Button variant="light" onClick={() => {}}>
          Voltar
        </Button>{" "}
        <Button onClick={() => {}}>Próximo</Button>
        <Button
          color="teal"
          onClick={() =>
            openConfirmSaveModal(() => alert("Dados enviados com sucesso!"))
          }
        >
          Salvar dados
        </Button>
      </Group>
    </Container>
  );
};
