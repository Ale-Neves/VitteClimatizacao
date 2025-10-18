import { useEffect, useState } from "react";
import { NAVIGATION } from "../../../constants";

export const useHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("/");

    useEffect(() => {
        // Detecta a página atual
        setActiveNav(window.location.pathname);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (href: string) => {
        if (href.startsWith("#")) {
            // Scroll interno
            const element = document.getElementById(href.replace("#", ""));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navegação para outras páginas
            window.location.href = href;
            setActiveNav(href);
        }
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        window.location.href = "/";
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return {
        isMobileMenuOpen,
        activeNav,
        toggleMobileMenu,
        handleNavClick,
        handleLogoClick,
        closeMobileMenu,
        NAVIGATION,
    };
};
