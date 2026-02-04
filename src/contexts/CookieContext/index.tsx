import React, { createContext, useContext, useState, useEffect } from "react";
import type { CookieContextValue, CookieProviderProps, CookieConsentStatus } from "./types";

const COOKIE_CONSENT_KEY = "vitte_cookie_consent";

const CookieContext = createContext<CookieContextValue | undefined>(undefined);

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
    const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>("pending");

    useEffect(() => {
        const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (savedConsent === "accepted" || savedConsent === "rejected") {
            setConsentStatus(savedConsent as CookieConsentStatus);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
        setConsentStatus("accepted");
        
        // Aqui você pode adicionar lógica para inicializar analytics, etc.
        console.log("✅ Cookies aceitos - Analytics podem ser inicializados");
    };

    const rejectCookies = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
        setConsentStatus("rejected");
        
        // Aqui você pode adicionar lógica para desabilitar analytics, etc.
        console.log("❌ Cookies recusados - Analytics desabilitados");
    };

    const resetConsent = () => {
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        setConsentStatus("pending");
    };

    return (
        <CookieContext.Provider
            value={{
                consentStatus,
                acceptCookies,
                rejectCookies,
                resetConsent,
            }}
        >
            {children}
        </CookieContext.Provider>
    );
};

export const useCookieConsent = (): CookieContextValue => {
    const context = useContext(CookieContext);
    if (context === undefined) {
        throw new Error("useCookieConsent deve ser usado dentro de um CookieProvider");
    }
    return context;
};
