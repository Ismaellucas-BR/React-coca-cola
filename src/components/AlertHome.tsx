import { Terminal } from "@phosphor-icons/react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
function AlertHome() {
  return (
    <Alert>
      <Terminal size={32} />
      <AlertTitle className="font-UberMoveBold text-lg">Atenção</AlertTitle>
      <AlertDescription className="font-UberMoveNormal text-sm sm:text-base">
        Este site tem caráter estudantil. Nenhuma informação aqui deve ser
        interpretada ou utilizada com fins comerciais.
      </AlertDescription>
    </Alert>
  );
}

export default AlertHome;
