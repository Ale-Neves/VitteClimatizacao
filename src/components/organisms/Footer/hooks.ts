import { useState, useEffect } from "react";

export const useFooter = () => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        navigation: false,
        services: false,
        legal: false,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 720);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return {
        openSections,
        toggleSection,
        handleLogoClick,
        isMobile,
    };
};
