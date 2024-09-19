import { Container, Group, Title } from "@mantine/core";

export const AppHeader = () => {
  return (
    <Container size="lg" h="100%">
      <Group h="100%">
        <Title order={1} size="h4" c="white">
          Formulário de Cadastro
        </Title>
      </Group>
    </Container>
  );
};
