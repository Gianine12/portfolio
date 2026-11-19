import { useTranslation } from "react-i18next";

export function About() {
    const { t } = useTranslation();
    
    return(
        <section id="sobre_min" className="">
            <div className="flex">
                <div className="m-6">
                    <div className="border-2 w-120 h-60">
                        <p>asdadasdasdadas</p>
                    </div>
                </div>
                <div className="m-6">
                    <div className="border-2 mb-4 border-gold-dark text-gold-light w-28 text-center rounded-xl">
                        <p>{t("hero.greeting")}</p>
                    </div>
                    <div className="text-4xl font-semibold mb-4 border-b-2  border-gold-dark w-fit">
                        <p>{t("about.i_am")}</p>
                    </div>
                    <div className="w-310 text-justify">
                        <p>{t("about.description")}</p>
                        <br/>
                    </div>
                    <div className="w-310 text-justify">
                        <p>{t("about.description2")}</p>
                        <br/>
                    </div>
                    <div className="w-310 text-justify">
                        <p>{t("about.description3")}</p>
                        <br/>
                    </div>
                    <div className="w-310 text-justify">
                        <p>{t("about.description4")}</p>
                        <br/>
                    </div>
                </div>
            </div>
        </section>
    )
}