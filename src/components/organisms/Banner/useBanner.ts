import { useNotifications } from "../../../hooks/useNotifications";
import { MENSAGEM_WHATSAPP, DESCRICAO_BANNER, DESCRICAO_BANNER_MOBILE } from "./constants";
import type { BannerProps } from "./types";
import { useState, useEffect } from "react";

export const useBanner = ({ onRequestBudget, onViewServices }: BannerProps) => {
    const { showSuccess, showInfo } = useNotifications();
    const whatsappIcon = "src/assets/icons/icon_whatsapp.svg";
    const ferramentaIcon = "src/assets/icons/icon_ferramentas.svg";
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bannerText = isMobile ? DESCRICAO_BANNER_MOBILE : DESCRICAO_BANNER;

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
        bannerText,
    };
};
