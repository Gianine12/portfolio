import { useTranslation } from "react-i18next";

export function Header(){
    const { t, i18n } = useTranslation();

    const downloadCurriculum = () => {
        const language = i18n.language.startsWith("pt") ? "pt" : "en";
    
        const file = `/documents/Curriculo-${language}.pdf`;
        const link = document.createElement("a");

        link.href = file;
        link.download = `Curriculo-${language}.pdf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <header className="grid grid-cols-3 items-center border-b-4 border-card">
            <div>
                <p className="flex justify-start items-center text-2xl m-2 mt-4 text-gold font-bold">
                    <img src="./logo_empresa.png" alt="icone da Drakon Labs"  className="w-14"/>
                    {t("hero.name")}
                </p>
            </div>
            <nav className="flex justify-center items-center mt-4">
                <a className="m-2 text-xl text-gold hover:text-gold-dark font-semibold hover:border-b-2 hover:border-gold-dark" href="#apresentacao">{t("header.home")}</a>
                <a className="m-2 text-xl text-gold hover:text-gold-dark font-semibold hover:border-b-2 hover:border-gold-dark" href="#sobre_min">{t("header.about")}</a>
                <a className="m-2 text-xl text-gold hover:text-gold-dark font-semibold hover:border-b-2 hover:border-gold-dark" href="#projects">{t("header.projects")}</a>
                <a className="m-2 text-xl text-gold hover:text-gold-dark font-semibold hover:border-b-2 hover:border-gold-dark" href="#contac">{t("header.contact")}</a>
            </nav>
            <div className="flex justify-end">
                <button
                    onClick={downloadCurriculum}
                    className="text-xl cursor-pointer border-2 text-gold hover:text-gold-dark m-4 pl-4 pr-4 rounded-xl font-semibold">
                    {t("header.download_curriculo")}
                </button>
            </div>
        </header>
    )
}