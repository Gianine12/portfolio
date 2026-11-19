import { useTranslation } from "react-i18next";

export function Skills() {
    const { t } = useTranslation();
    
    return(
        <section id="skills">
            <div className="mt-4">
                <div className="m-4">
                    <div className="border-2 mb-4 border-gold-dark text-gold-light w-48 text-center rounded-xl">
                        <p>{t("skills.my_skills")}</p>
                    </div>
                    <div>
                        <p className="text-4xl">{t("skills.title")}</p>
                        <br/>
                    </div>
                    <div>
                        <p>{t("skills.subtitle")}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <div className="bg-card w-90 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-4 mr-2">
                                <img src="./monitor-de-tv.png" alt="icone de frontend" className="w-10"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.front")}
                            </div>
                        </div>
                    </div>

                    <div className="bg-card w-90 h-60 rounded-xl m-4 pt-2">
                        <div  className="flex items-center">
                            <div className="ml-4 mr-2">
                                <img src="./servidor.png" alt="icone de backend" className="w-10"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.backend")}
                            </div>
                        </div>
                    </div>

                    <div className="bg-card w-90 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-4 mr-2">
                                <img src="./api.png" alt="icone de api e integracao" className="w-10"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.api")}
                            </div>
                        </div>
                    </div>

                    <div className="bg-card w-90 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-4 mr-2">
                                <img src="./novo-banco-de-dados.png" alt="icone de banco de dados"  className="w-10"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.data")}
                            </div>
                        </div>
                    </div>

                    <div className="bg-card w-90 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-4 mr-2">
                                <img src="./ferramenta-de-reparacao.png" alt="icone de backend" className="w-10" />
                            </div>
                            <div className=" text-gold">
                                {t("skills.tools")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}