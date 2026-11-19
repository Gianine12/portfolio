import { useTranslation } from "react-i18next";
import { FormContact } from "~/components/FormContatct";

export function Contact(){
    const { t } = useTranslation();
    return (
        <section id="contac">
            <div className="flex">
                <div className="m-4 ml-48">
                    <div className="border-2 mb-4 border-gold-dark text-gold-light w-42 text-center rounded-xl">
                        <p>{t("contact.greeting")}</p>
                    </div>
                    <div className="text-4xl font-semibold border-b-2  border-gold-dark w-fit">
                        <p>{t("contact.title")}</p>
                    </div>
                    <br/>
                    <div className="mb-6 text-justify">
                        <p>{t("contact.description")}</p>
                    </div>
                    <div>
                        <ul>
                            <li className="flex items-center mb-4">
                                <img 
                                    src="./e-mail.png" 
                                    alt="icone email" 
                                    className="w-6 mr-2"
                                    style={{
                                            filter: "brightness(0) saturate(100%) invert(45%) sepia(91%) saturate(750%) hue-rotate(9deg) brightness(85%) contrast(95%)"
                                        }}
                                />
                                {t("contact.email")}
                            </li>

                            <li className="flex items-center mb-4">
                                <img 
                                    src="./whatsapp.png" 
                                    alt="icone whatsapp" 
                                    className="w-6 mr-2"
                                    style={{
                                        filter: "brightness(0) saturate(100%) invert(45%) sepia(91%) saturate(750%) hue-rotate(9deg) brightness(85%) contrast(95%)"
                                    }}
                                />
                                {t("contact.cel")}
                            </li>

                            <li className="flex items-center mb-4">
                                <img 
                                    src="./location.png" 
                                    alt="icone localizacao" 
                                    className="w-6 mr-2"
                                    style={{
                                        filter: "brightness(0) saturate(100%) invert(45%) sepia(91%) saturate(750%) hue-rotate(9deg) brightness(85%) contrast(95%)"
                                    }}
                                />
                                {t("contact.location")}
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="ml-90 mt-16">
                    <FormContact/>
                </div>
            </div>
        </section>
    )
}