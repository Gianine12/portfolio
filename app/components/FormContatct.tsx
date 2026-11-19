import { useState } from "react";
import { useTranslation } from "react-i18next";

export function FormContact(){
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setLoading(true);
        setStatus("");

        try {
        const response = await fetch(
            "https://formspree.io/f/xkjrzkge",
            {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
            }
        );

        if (response.ok) {
            setStatus("Mensagem enviada com sucesso!");
            form.reset();

            setTimeout(() => {
                setStatus("");
            }, 3000);
        } else {
            setStatus("Não foi possível enviar sua mensagem.");
            setTimeout(() => {
                setStatus("");
            }, 3000);
        }
        } catch {
        setStatus("Erro de conexão. Tente novamente.");
        } finally {
        setLoading(false);
        }
    }
    const { t } = useTranslation();
    return(
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <div className="mb-4">
                    <input name="nome" type="text" placeholder={t("contact.form_name")} className="bg-card w-70 mr-4 p-2"/>
                </div>
                <div>
                    <input name="email" type="email" placeholder={t("contact.form_email")} className="bg-card w-70 p-2"/>
                </div>
            </div>
            <div>
                <textarea name="message" placeholder={t("contact.form_message")} className="bg-card w-xl h-30 mb-2 p-2"/>
            </div>
            <div>
                <button 
                    type="submit" 
                    disabled={loading}
                    className="text-gold-dark flex border-2 rounded-2xl p-2 cursor-pointer" >
                    <img 
                        src="./send.svg" 
                        alt="icone mensagem"
                        className="w-6 mr-2 text-gold-dark" 
                        style={{
                            filter: "brightness(0) saturate(100%) invert(45%) sepia(91%) saturate(750%) hue-rotate(9deg) brightness(85%) contrast(95%)"
                        }}
                    />
                    {loading ? t("contact.sending") : t("contact.button")}
                </button>
                {status && <p>{status}</p>}
            </div>
        </form>
    )
}