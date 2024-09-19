import { Accordion, ActionIcon, Center } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export const CustomAccordionControl = (props) => {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconEdit size="1rem" />
      </ActionIcon>
      <ActionIcon size="lg" variant="subtle" color="red">
        <IconTrash size="1rem" />
      </ActionIcon>
    </Center>
  );
};

CustomAccordionControl.propTypes = {
  ...Accordion.Control.propTypes,
};
