import { useTranslation } from "react-i18next";

export function Header(){
    const { t } = useTranslation();
    return (
        <header className="flex gap-3">
            <p className="flex-1">{t("hero.name")}</p>
            <nav className="flex-1">
                <a href="/">{t("header.home")}</a>
                <a href="/">{t("header.about")}</a>
                <a href="/">{t("header.projects")}</a>
                <a href="/">{t("header.contact")}</a>
            </nav>
            <button className="flex-1">{t("header.download_curriculo")}</button>
        </header>
    )
}