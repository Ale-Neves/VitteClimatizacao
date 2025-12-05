import { useState } from "react";
import type { ContactFormData } from "../../molecules/ContactForm/types";

export const useContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        
        try {
            // Simular envio - pode integrar com API real aqui
            await new Promise((resolve) => setTimeout(resolve, 1000));
            
            console.log("Form Data:", data);
            
            // Aqui você pode adicionar notificação de sucesso
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Erro ao enviar mensagem. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        handleFormSubmit,
        isSubmitting,
    };
};
