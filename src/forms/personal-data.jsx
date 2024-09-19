import { Fieldset, Grid, TextInput, Radio, Group, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import InputWithMask from "react-input-mask";
import { FormSectionTitle } from "../components/form-section-title";

export const FormPersonalData = () => {
  return (
    <Fieldset
      legend={
        <FormSectionTitle
          step={1}
          title="Dados Pessoais"
          caption="Informações Pessoais de contato"
        />
      }
    >
      <Grid>
        <Grid.Col span={{ xs: 12, md: 6 }}>
          <TextInput label="Nome Completo" />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 6 }}>
          <Radio.Group label="Gênero">
            <Group my="xs">
              <Radio value="male" label="Masculino" />
              <Radio value="female" label="Feminino" />
              <Radio value="other" label="Outro" />
            </Group>
          </Radio.Group>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 3 }}>
          <Select data={["Brasileiro", "Estrangeiro"]} label="Nacionalidade" />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 3 }}>
          <TextInput label="Naturalidade" />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 3 }}>
          <DateInput
            valueFormat="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            label="Data de Nascimento"
          />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 6 }}>
          <TextInput label="E-mail" />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 3 }}>
          <TextInput
            component={InputWithMask}
            mask="(99) 9999-9999"
            placeholder="(99) 9999-9999"
            label="Telefone"
          />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 3 }}>
          <TextInput
            label="Celular / Whatsapp"
            component={InputWithMask}
            mask="(99) 99999-9999"
            placeholder="(99) 99999-9999"
          />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 4 }}>
          <TextInput label="Website / Portifólio" />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 4 }}>
          <TextInput label="LinkedIn" />
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 4 }}>
          <TextInput label="GitHub" />
        </Grid.Col>
      </Grid>
    </Fieldset>
  );
};
