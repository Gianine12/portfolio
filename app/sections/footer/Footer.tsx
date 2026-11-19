import { useTranslation } from "react-i18next";
import { ContactScial } from "~/components/ContactSocial";

export function Footer(){
    const { t } = useTranslation();
    return (
        <footer className="grid grid-cols-3 items-center border-t-4 border-card">
            <div>
                <p className="flex justify-start items-center text-2xl m-2 mt-2 text-gold font-bold">
                    <img src="./logo_empresa.png" alt="icone da Drakon Labs"  className="w-14"/>
                    {t("hero.name")}
                </p>
            </div>
            <div className="flex justify-center items-center">
                <p>{t("footer.copyright")} {t("footer.name")} {t("footer.copyright_continue")}</p>
            </div>
            <div className="flex justify-end">
                <ContactScial/>
            </div>
        </footer>
    )
}