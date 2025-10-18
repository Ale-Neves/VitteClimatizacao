import { useState } from "react";

export const useLogo = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [logoError, setLogoError] = useState(false);

    const handleLogoLoad = () => {
        setLogoLoaded(true);
        setLogoError(false);
    };

    const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        // Tentar carregar da pasta public como fallback
        if (!e.currentTarget.src.includes("/logo_vitte_climatizacao.svg")) {
            e.currentTarget.src = "/logo_vitte_climatizacao.svg";
        } else {
            // Se ainda falhar, mostrar apenas o texto
            setLogoError(true);
            setLogoLoaded(false);
        }
    };

    const isLogoVisible = logoLoaded && !logoError;

    return {
        logoLoaded,
        logoError,
        isLogoVisible,
        handleLogoLoad,
        handleLogoError,
    };
};
