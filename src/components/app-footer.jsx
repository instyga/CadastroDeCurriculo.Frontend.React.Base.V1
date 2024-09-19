import { Button, Container, Group } from "@mantine/core";

export const AppFooter = () => {
  return (
    <Container size="lg">
      <Group my="lg" position="right">
        <Button>Próximo</Button>
        <Button variant="outline" color="gray">
          Cancelar
        </Button>
      </Group>
    </Container>
  );
};
