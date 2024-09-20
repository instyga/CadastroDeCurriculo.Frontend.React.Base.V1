import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";
import { getFromStorage } from "../helpers/get-from-storage";
import { saveToStorage } from "../helpers/save-to-storage";

const alertClosedKey = "alert-closed";

export const ExperimentalFormAlert = () => {
  const [isClosed, setIsClosed] = useState(!!getFromStorage(alertClosedKey));

  const handleClose = () => {
    setIsClosed(true);
    saveToStorage(alertClosedKey, true);
  };

  return (
    !isClosed && (
      <Alert
        variant="light"
        color="orange"
        title="Este formulário é uma simulação"
        withCloseButton
        icon={<IconAlertCircle />}
        my="md"
        onClose={handleClose}
      >
        Nenhum dado informado no formulário abaixo é persistido em nossos
        servidores ou será utilizado para fins que não sejam didáticos.
      </Alert>
    )
  );
};
