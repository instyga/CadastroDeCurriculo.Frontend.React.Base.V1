import {
  Button,
  Checkbox,
  Fieldset,
  Grid,
  Group,
  TextInput,
} from "@mantine/core";
import { FormSectionTitle } from "../components/form-section-title";
import { DateInput } from "@mantine/dates";

export const FormScholarshipDetails = () => {
  return (
    <>
      <Fieldset
        legend={
          <FormSectionTitle
            step={3}
            title="Escolaridade"
            caption="Lista de cursos e graduações"
          />
        }
      >
        <Grid>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <TextInput label="Instituição" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <TextInput label="Curso" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <DateInput placeholder="DD/MM/YYYY" label="Data de início" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 3 }}>
            <DateInput placeholder="DD/MM/YYYY" label="Data do término" />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }} align="flex-end">
            <Checkbox.Group label="Situação">
              <Group my="xs">
                <Checkbox value="actual" label="Ainda estou cursando" />
              </Group>
            </Checkbox.Group>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 12 }}>
            <Button variant="outline">Adicionar escolaridade</Button>
          </Grid.Col>
        </Grid>
      </Fieldset>
    </>
  );
};
