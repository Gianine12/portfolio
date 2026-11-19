import { useTranslation } from "react-i18next";

export function Skills() {
    const { t } = useTranslation();
    
    return(
        <section id="skills">
            <div className="mt-4">
                <div className="m-4 ml-48">
                    <div className="border-2 mb-4 border-gold-dark text-gold-light w-48 text-center rounded-xl">
                        <p>{t("skills.my_skills")}</p>
                    </div>
                    <div className="text-4xl font-semibold border-b-2  border-gold-dark w-fit">
                        <p>{t("skills.title")}</p>
                    </div>
                    <br/>
                    <div>
                        <p>{t("skills.subtitle")}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <div className="bg-card w-70 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-6 mt-3 mr-2">
                                <img src="./monitor-de-tv.png" alt="icone de frontend" className="w-10 brightness-0 invert"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.front")}
                            </div>
                        </div>
                        <div className="ml-4">
                            <ul className="pt-2 list-disc pl-6 marker:text-gold">
                                <li className="mt-2">{t("skills.front_skills_1")}</li>
                                <li className="mt-2">{t("skills.front_skills_2")}</li>
                                <li className="mt-2">{t("skills.front_skills_3")}</li>
                                <li className="mt-2">{t("skills.front_skills_4")}</li>
                                <li className="mt-2">{t("skills.front_skills_5")}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card w-70 h-60 rounded-xl m-4 pt-2">
                        <div  className="flex items-center">
                            <div className="ml-6 mt-3 mr-2">
                                <img src="./servidor.png" alt="icone de backend" className="w-10 brightness-0 invert"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.backend")}
                            </div>
                        </div>
                        <div className="ml-4">
                            <ul className="pt-2 list-disc pl-6 marker:text-gold">
                                <li className="mt-2">{t("skills.backend_skills_1")}</li>
                                <li className="mt-2">{t("skills.backend_skills_2")}</li>
                                <li className="mt-2">{t("skills.backend_skills_3")}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card w-70 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-6 mt-3 mr-2">
                                <img src="./api.png" alt="icone de api e integracao" className="w-10 brightness-0 invert"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.api")}
                            </div>
                        </div>
                        <div className="ml-4">
                            <ul className="pt-2 list-disc pl-6 marker:text-gold">
                                <li className="mt-2">{t("skills.api_skills_1")}</li>
                                <li className="mt-2">{t("skills.api_skills_2")}</li>
                                <li className="mt-2">{t("skills.api_skills_3")}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card w-70 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-6 mt-3 mr-2">
                                <img src="./novo-banco-de-dados.png" alt="icone de banco de dados"  className="w-10 brightness-0 invert"/>
                            </div>
                            <div className=" text-gold">
                                {t("skills.data")}
                            </div>
                        </div>
                        <div className="ml-4">
                            <ul className="pt-2 list-disc pl-6 marker:text-gold">
                                <li className="mt-2">{t("skills.data_skills_1")}</li>
                                <li className="mt-2">{t("skills.data_skills_2")}</li>
                                <li className="mt-2">{t("skills.data_skills_3")}</li>
                                <li className="mt-2">{t("skills.data_skills_4")}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card w-70 h-60 rounded-xl m-4 pt-2">
                        <div className="flex items-center">
                            <div className="ml-6 mt-3 mr-2">
                                <img src="./ferramenta-de-reparacao.png" alt="icone de backend" className="w-10 brightness-0 invert" />
                            </div>
                            <div className=" text-gold">
                                {t("skills.tools")}
                            </div>
                        </div>
                        <div className="ml-4">
                            <ul className="pt-2 list-disc pl-6 marker:text-gold">
                                <li className="mt-2">{t("skills.tools_skills_1")}</li>
                                <li className="mt-2">{t("skills.tools_skills_2")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}