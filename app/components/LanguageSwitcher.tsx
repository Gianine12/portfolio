import { useTranslation } from "react-i18next";

export function LanguageSwitcher(){
    const { i18n } = useTranslation();

    const changeLanguage = ( language : string) => {
        i18n.changeLanguage(language);
    };

    return(
        <div>
            <button onClick={() => changeLanguage("pt")}>
                Português
            </button>
            <br/>
            <button onClick={() => changeLanguage("en")}>
                English
            </button>
        </div>
    )

}