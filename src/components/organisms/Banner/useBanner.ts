import { useNotifications } from "../../../hooks/useNotifications";
import { MENSAGEM_WHATSAPP } from "./constants";
import type { BannerProps } from "./types";

export const useBanner = ({ onRequestBudget, onViewServices }: BannerProps) => {
    const { showSuccess, showInfo } = useNotifications();
    const whatsappIcon = "src/assets/icons/icon_whatsapp.svg";
    const ferramentaIcon = "src/assets/icons/icon_ferramentas.svg";

    const handleRequestBudget = () => {
        const message = encodeURIComponent(MENSAGEM_WHATSAPP);
        const whatsappUrl = `https://wa.me/5518997140925?text=${message}`;
        window.open(whatsappUrl, "_blank");

        showSuccess(
            "WhatsApp Aberto",
            "Você foi redirecionado para o WhatsApp. Nossa equipe responderá em breve!",
            4000
        );

        if (onRequestBudget) onRequestBudget();
    };

    const handleViewServices = () => {
        const servicesElement = document.getElementById("servicos");
        if (servicesElement) {
            servicesElement.scrollIntoView({ behavior: "smooth" });
            showInfo("Navegação", "Rolando para a seção de serviços...", 2000);
        }

        if (onViewServices) onViewServices();
    };

    return {
        handleRequestBudget,
        handleViewServices,
        whatsappIcon,
        ferramentaIcon,
    };
};
