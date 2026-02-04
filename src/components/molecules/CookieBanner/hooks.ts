import { useState, useEffect } from "react";
import { COOKIES } from "../../../constants";

interface UseCookieBannerReturn {
    isVisible: boolean;
    handleAccept: () => void;
    handleReject: () => void;
}

interface UseCookieBannerProps {
    onAccept?: () => void;
    onReject?: () => void;
}

export const useCookieBanner = ({
    onAccept,
    onReject,
}: UseCookieBannerProps): UseCookieBannerReturn => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verifica se o usuário já deu ou não consentimento
        const consent = localStorage.getItem(COOKIES.CONSENT_KEY);
        if (!consent) {
            // Pequeno delay para melhor UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIES.CONSENT_KEY, "accepted");
        setIsVisible(false);
        onAccept?.();
    };

    const handleReject = () => {
        localStorage.setItem(COOKIES.CONSENT_KEY, "rejected");
        setIsVisible(false);
        onReject?.();
    };

    return {
        isVisible,
        handleAccept,
        handleReject,
    };
};
