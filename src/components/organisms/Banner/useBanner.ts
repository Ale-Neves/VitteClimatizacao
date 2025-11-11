import { useNotifications } from "../../../hooks/useNotifications";
import { ELEMENT_IDS } from "../../../constants";
import { 
    MENSAGEM_WHATSAPP, 
    DESCRICAO_BANNER, 
    DESCRICAO_BANNER_MOBILE,
    BUTTON_TEXTS,
    NOTIFICATION_MESSAGES,
    CONTACT_CONFIG,
    BANNER_ASSETS 
} from "./constants";
import type { BannerProps } from "./types";
import { useState, useEffect } from "react";

export const useBanner = ({ onRequestBudget, onViewServices }: BannerProps) => {
    const { showSuccess, showInfo } = useNotifications();
    const whatsappIcon = BANNER_ASSETS.WHATSAPP_ICON;
    const ferramentaIcon = BANNER_ASSETS.TOOLS_ICON;
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const bannerText = isMobile ? DESCRICAO_BANNER_MOBILE : DESCRICAO_BANNER;

    const buttonTexts = {
        requestBudget: isMobile ? BUTTON_TEXTS.REQUEST_BUDGET_MOBILE : BUTTON_TEXTS.REQUEST_BUDGET,
        services: isMobile ? BUTTON_TEXTS.SERVICES_MOBILE : BUTTON_TEXTS.SERVICES,
    };

    const handleRequestBudget = () => {
        const message = encodeURIComponent(MENSAGEM_WHATSAPP);
        const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${message}`;
        window.open(whatsappUrl, "_blank");

        showSuccess(
            NOTIFICATION_MESSAGES.WHATSAPP_SUCCESS.TITLE,
            NOTIFICATION_MESSAGES.WHATSAPP_SUCCESS.MESSAGE,
            NOTIFICATION_MESSAGES.WHATSAPP_SUCCESS.DURATION
        );

        if (onRequestBudget) onRequestBudget();
    };

    const handleViewServices = () => {
        const servicesElement = document.getElementById(ELEMENT_IDS.SERVICES_SECTION);
        if (servicesElement) {
            servicesElement.scrollIntoView({ behavior: "smooth" });
            showInfo(
                NOTIFICATION_MESSAGES.NAVIGATION_SERVICES.TITLE, 
                NOTIFICATION_MESSAGES.NAVIGATION_SERVICES.MESSAGE, 
                NOTIFICATION_MESSAGES.NAVIGATION_SERVICES.DURATION
            );
        }

        if (onViewServices) onViewServices();
    };

    return {
        handleRequestBudget,
        handleViewServices,
        whatsappIcon,
        ferramentaIcon,
        bannerText,
        isMobile,
        buttonTexts,
    };
};
