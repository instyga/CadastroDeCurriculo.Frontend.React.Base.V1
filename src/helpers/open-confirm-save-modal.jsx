import { modals } from "@mantine/modals";
import { Text, Title } from "@mantine/core";

export const openConfirmSaveModal = (onConfirm, onCancel) =>
  modals.openConfirmModal({
    title: (
      <Title order={2} size="h5">
        Você deseja finalizar?
      </Title>
    ),
    centered: true,
    children: (
      <Text>
        Ao confirmar, os dados cadastrais serão enviados para processamento.
      </Text>
    ),
    labels: { confirm: "Confirmar", cancel: "Cancelar" },
    onCancel,
    onConfirm,
  });
