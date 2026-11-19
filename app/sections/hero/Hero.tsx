import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "~/components/LanguageSwitcher";


export function Hero(){
    const { t } = useTranslation();

    return (
        <section id="apresentacao" className="grid grid-rows-[557px_320px] bg-linear-to-bl from-card to-deep">
            <div className="flex">
                <div className="pl-48 pt-24">
                    <div className="border-2 border-gold-dark text-gold-light w-28 text-center rounded-xl">
                        <p>{t("hero.greeting")}</p>
                    </div>
                    <div className="mt-8">
                        <p className="text-gold font-bold text-9xl border-b-4 w-fit">{t("hero.name_last_name")}</p>
                    </div>
                    <div className="mt-4">
                        <p className="font-bold text-2xl">{t("hero.role")}</p>
                    </div>
                    <div className="w-240 mt-4 text-justify">
                        <p>{t("hero.description")}</p>
                        <br/>
                        <p>{t("hero.description2")}</p>
                    </div>
                </div>
                <div>
                    imagem
                </div>
            </div>
            <div className="flex items-center justify-center">
                <LanguageSwitcher/>
            </div>
        </section>
    )
}