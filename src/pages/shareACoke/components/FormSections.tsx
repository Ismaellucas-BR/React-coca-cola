import { useEffect, useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

import { useTranslation } from "react-i18next";

interface PropsForm {
  title: string;
  span1: string;
  extraClasse?: string;
}

type AlertType = "success" | "warning" | "error";

export default function FormSections(props: PropsForm) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [promo, setPromo] = useState(false);
  const [terms, setTerms] = useState(false);

  const [alert, setAlert] = useState<{
    type: AlertType;
    message: string;
  } | null>(null);

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    birth.trim() !== "" &&
    promo &&
    terms;

  function handleSubmit(e: React.FormEvent) {
    const { t } = useTranslation("FormSection");
    e.preventDefault();

    if (!isFormValid) {
      setAlert({
        type: "warning",
        message: t("PleaseFillFields."),
      });
      return;
    }

    setAlert({
      type: "success",
      message: t("FormSubmittedSuccessfully"),
    });

    // Reset opcional
    setName("");
    setEmail("");
    setBirth("");
    setPromo(false);
    setTerms(false);
  }

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const { t } = useTranslation("FormSection");
  return (
    <>
      {/* ALERT */}
      {alert && (
        <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 animate-slide-in w-[90%] max-w-md">
          <Alert
            className={`shadow-lg border-l-4
              ${
                alert.type === "success"
                  ? "bg-green-100 border-green-600 text-green-900"
                  : alert.type === "warning"
                  ? "bg-yellow-100 border-yellow-600 text-yellow-900"
                  : "bg-red-100 border-red-600 text-red-900"
              }`}>
            <AlertTitle>
              {alert.type === "success" && "Sucesso"}
              {alert.type === "warning" && "Atenção"}
              {alert.type === "error" && "Erro"}
            </AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* FORM */}
      <section
        className={`section-main max-w-screen w-full xl:w-[46rem] ${props.extraClasse}`}>
        <div className="flex flex-col gap-2 font-Noto text-base">
          <h2 className="title-section">{props.title}</h2>
          <span>{props.span1}</span>
          <span>{t("FieldsMarked")}</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-7">
          <div className="div-form">
            <label className="font-Noto text-[0.8rem]">{t("Name")}</label>
            <input
              type="text"
              value={name}
              placeholder={t("Name")}
              onChange={(e) => {
                const onlyLetters = e.target.value.replace(
                  /[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g,
                  ""
                );
                setName(onlyLetters);
              }}
              className="input-form p-2 border rounded"
            />
          </div>

          <div className="div-form">
            <label className="font-Noto text-[0.8rem]">
              {t("EmailAddress")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("EmailAddress")}
              className="input-form p-2 border rounded"
            />
          </div>

          <div className="div-form">
            <label className="font-Noto text-[0.8rem]">
              {t("DateOfBirth")}
            </label>
            <input
              type="date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              className="input-form p-2 border rounded"
            />
          </div>

          <div className="div-form">
            <label className="relative flex items-start gap-3 cursor-pointer font-Noto text-lg">
              <input
                type="checkbox"
                checked={promo}
                onChange={(e) => setPromo(e.target.checked)}
                className="peer cursor-pointer appearance-none border-2 border-black bg-white rounded w-10 h-6 checked:bg-[#6c6c6c] md:w-6"
              />
              <span className="pointer-events-none absolute left-[6px] top-[2px] text-white text-sm peer-checked:opacity-100 opacity-0 transition-opacity">
                ✔
              </span>
              <span>{t("IAgreeToReceiveCommunications")}</span>
            </label>

            <label className="relative flex items-start gap-3 mt-4 cursor-pointer font-Noto text-lg">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                className="peer cursor-pointer appearance-none border-2 border-black bg-white rounded w-10 h-6 checked:bg-[#6c6c6c] md:w-6"
              />
              <span className="pointer-events-none absolute left-[6px] top-[2px] text-white text-sm peer-checked:opacity-100 opacity-0 transition-opacity">
                ✔
              </span>
              <span>
                {t("IHaveRead")}{" "}
                <a
                  href="/termos.html"
                  target="_blank"
                  className="text-black font-bold underline">
                  {t("TermsOfUse")}
                </a>{" "}
                {t("AndThe")}{" "}
                <a
                  href="/termos.html"
                  target="_blank"
                  className="text-black font-bold underline">
                  {t("PrivacyPolicy")}
                </a>
                .
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`p-2 rounded mt-4 transition
              ${
                isFormValid
                  ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}>
            {t("ToSend")}
          </button>
        </form>
      </section>
    </>
  );
}
