import { Button, Container, Group } from "@mantine/core";
import { useFormContext } from "../context/use-form-context";
import { openConfirmSaveModal } from "../helpers/open-confirm-save-modal";

export const AppFooter = () => {
  const { incrementStep, decrementStep, canIncrement, canDecrement } =
    useFormContext();

  return (
    <Container size="lg">
      <Group my="lg" position="right">
        <>
          {canDecrement && (
            <Button variant="light" onClick={() => decrementStep()}>
              Voltar
            </Button>
          )}
          {canIncrement && (
            <Button onClick={() => incrementStep()}>Próximo</Button>
          )}
          {!canIncrement && (
            <Button
              color="teal"
              onClick={() =>
                openConfirmSaveModal(() => alert("Dados enviados com sucesso!"))
              }
            >
              Salvar dados
            </Button>
          )}
        </>
      </Group>
    </Container>
  );
};
