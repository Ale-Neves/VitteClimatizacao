import { useEffect, useState } from "react";
import { NAVIGATION } from "../../../constants";

export const useHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("/");

    useEffect(() => {
        // Detecta a seção ativa baseado no scroll
        const handleScroll = () => {
            const sections = [
                { id: "servicos", nav: NAVIGATION.SERVICES },
                { id: "catalogo", nav: "#catalogo" },
                { id: "historia", nav: NAVIGATION.ABOUT },
            ];

            // Se estiver no topo da página
            if (window.scrollY < 200) {
                setActiveNav(NAVIGATION.HOME);
                return;
            }

            // Verifica qual seção está visível
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top <= 150 && rect.bottom >= 150;
                    
                    if (isVisible) {
                        setActiveNav(section.nav);
                        return;
                    }
                }
            }
        };

        handleScroll(); // Executa uma vez ao montar
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (href: string) => {
        if (href === NAVIGATION.HOME || href === "/") {
            // Scroll para o topo
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveNav(NAVIGATION.HOME);
        } else if (href.startsWith("#")) {
            // Scroll interno para seção
            const element = document.getElementById(href.replace("#", ""));
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                setActiveNav(href);
            }
        } else {
            // Navegação para outras páginas
            window.location.href = href;
            setActiveNav(href);
        }
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveNav(NAVIGATION.HOME);
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
