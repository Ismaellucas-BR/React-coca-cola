import { Terminal } from "@phosphor-icons/react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { useTranslation } from "react-i18next";
function AlertHome() {
  const { t } = useTranslation("common");
  return (
    <Alert className="max-w-[90rem]!">
      <Terminal size={32} />
      <AlertTitle className="font-UberMoveBold text-lg">
        {t("Attention")}
      </AlertTitle>
      <AlertDescription className="font-UberMoveNormal text-sm sm:text-base">
        {t("ThisSiteIs")}
      </AlertDescription>
    </Alert>
  );
}

export default AlertHome;
