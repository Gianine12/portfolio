import { useTranslation } from "react-i18next";


export function LanguageSwitcher(){
    const { i18n, t } = useTranslation();

    const changeLanguage = ( language : string) => {
        i18n.changeLanguage(language);
    };

    return(
        <div className="text-center justify-items-center p-14 border-6 border-double w-140 h-60 rounded-2xl mt-8 border-gold-dark bg-card">
            <p className="text-2xl font-semibold">{t("hero.language")}</p>
            <div className="flex mt-8 text-xl">
                <button className="flex items-center justify-center hover:text-gold-light hover:font-semibold border-2 mr-10 rounded-2xl w-48 h-14" onClick={() => changeLanguage("pt")}>
                    Português
                    <img src="./brasil.png" alt="Brandeira do Brasil" className="w-10 m-2"/>
                </button>
                <br/>
                <button className="flex items-center justify-center hover:text-gold-light hover:font-semibold border-2 ml-10 rounded-2xl w-48 h-14" onClick={() => changeLanguage("en")}>
                    English
                    <img src="./eua.png" alt="Brandeira do E.U.A" className="w-10 m-2" />
                </button>
            </div>
        </div>
    )

}