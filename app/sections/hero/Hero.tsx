import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "~/components/LanguageSwitcher";


export function Hero(){
    const { t } = useTranslation();

    return (
        <section id="sobre_min">
            <LanguageSwitcher/>
        </section>
    )
}