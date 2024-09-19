import {
  Button,
  Checkbox,
  Fieldset,
  Grid,
  Group,
  Textarea,
  TextInput,
} from "@mantine/core";
import { FormSectionTitle } from "../components/form-section-title";

export const FormProfessionalExperiences = () => {
  return (
    <>
      <Fieldset
        legend={
          <FormSectionTitle
            step={2}
            title="Dados Pessoais"
            caption="Informações Pessoais de contato"
          />
        }
      >
        <Grid>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <TextInput label="Empresa" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <TextInput label="Cargo" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <TextInput label="Data de início" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <TextInput label="Data da saída" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }} align="flex-end">
            <Checkbox.Group label="Situação">
              <Group my="xs">
                <Checkbox value="actual" label="Ainda trabalho nesta empresa" />
              </Group>
            </Checkbox.Group>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 12 }}>
            <Textarea
              label="Descrição das atividades"
              description="Dica: fale sobre as atividades que você exerceu e que trouxeram impactos positivos para a empresa"
            />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 12 }}>
            <Button variant="outline">Adicionar Experiência</Button>
          </Grid.Col>
        </Grid>
      </Fieldset>
    </>
  );
};
