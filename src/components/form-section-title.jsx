import { Avatar, Group, Paper, Stack, Text, Title } from "@mantine/core";
import * as PropTypes from "prop-types";

export const FormSectionTitle = ({ step, title, caption }) => {
  return (
    <Group gap="xs" my="xs" mx={0} p="xs" component={Paper}>
      <Avatar variant="filled" radius="sm" size="md">
        {step}
      </Avatar>
      <Stack gap={0}>
        <Title order={2} size="h4">
          {title}
        </Title>
        <Text size="sm" color="dimmed">
          {caption}
        </Text>
      </Stack>
    </Group>
  );
};

FormSectionTitle.propTypes = {
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
