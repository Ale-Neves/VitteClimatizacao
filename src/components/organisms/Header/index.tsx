import React from "react";
import { TEXTS } from "../../../constants";
import { Logo } from "../../atoms/Logo";
import { useHeader } from "./hooks";
import * as S from "./styles";

export const Header: React.FC = () => {
    const {
        isMobileMenuOpen,
        activeNav,
        toggleMobileMenu,
        handleNavClick,
        handleLogoClick,
        closeMobileMenu,
        NAVIGATION,
    } = useHeader();

    return (
        <>
            <S.HeaderContainer>
                <S.HeaderContent>
                    <S.LogoContainer>
                        <Logo onClick={handleLogoClick} />
                    </S.LogoContainer>

                    <S.DesktopNavigation>
                        <S.NavList>
                            <S.NavItem
                                $isActive={activeNav === NAVIGATION.HOME}
                                onClick={() => handleNavClick(NAVIGATION.HOME)}
                            >
                                {TEXTS.NAV.HOME}
                            </S.NavItem>
                            <S.NavItem
                                $isActive={activeNav === NAVIGATION.SERVICES}
                                onClick={() => handleNavClick(NAVIGATION.SERVICES)}
                            >
                                {TEXTS.NAV.SERVICES}
                            </S.NavItem>
                            <S.NavItem
                                $isActive={activeNav === NAVIGATION.ABOUT}
                                onClick={() => handleNavClick(NAVIGATION.ABOUT)}
                            >
                                {TEXTS.NAV.ABOUT}
                            </S.NavItem>
                            <S.NavItem
                                $isActive={activeNav === NAVIGATION.CATALOG}
                                onClick={() => handleNavClick(NAVIGATION.CATALOG)}
                            >
                                {TEXTS.NAV.CATALOG}
                            </S.NavItem>
                            <S.NavItem
                                $isActive={activeNav === NAVIGATION.TESTIMONIALS}
                                onClick={() => handleNavClick(NAVIGATION.TESTIMONIALS)}
                            >
                                {TEXTS.NAV.TESTIMONIALS}
                            </S.NavItem>
                            <S.NavItem
                                $isActive={activeNav === NAVIGATION.CONTACT}
                                onClick={() => handleNavClick(NAVIGATION.CONTACT)}
                            >
                                {TEXTS.NAV.CONTACT}
                            </S.NavItem>
                            <S.NavItem
                                $isActive={activeNav === NAVIGATION.SHOP}
                                onClick={() => handleNavClick(NAVIGATION.SHOP)}
                            >
                                {TEXTS.NAV.SHOP}
                            </S.NavItem>
                        </S.NavList>
                    </S.DesktopNavigation>

                    <S.MobileMenuButton onClick={toggleMobileMenu}>
                        <S.HamburgerLine $isOpen={isMobileMenuOpen} />
                        <S.HamburgerLine $isOpen={isMobileMenuOpen} />
                        <S.HamburgerLine $isOpen={isMobileMenuOpen} />
                    </S.MobileMenuButton>
                </S.HeaderContent>

                <S.GradientBorder />
            </S.HeaderContainer>

            <S.MobileNavigation $isOpen={isMobileMenuOpen}>
                <S.MobileNavList>
                    <S.MobileNavItem
                        $isActive={activeNav === NAVIGATION.HOME}
                        onClick={() => handleNavClick(NAVIGATION.HOME)}
                    >
                        {TEXTS.NAV.HOME}
                    </S.MobileNavItem>
                    <S.MobileNavItem
                        $isActive={activeNav === NAVIGATION.SERVICES}
                        onClick={() => handleNavClick(NAVIGATION.SERVICES)}
                    >
                        {TEXTS.NAV.SERVICES}
                    </S.MobileNavItem>
                    <S.MobileNavItem
                        $isActive={activeNav === NAVIGATION.CATALOG}
                        onClick={() => handleNavClick(NAVIGATION.CATALOG)}
                    >
                        {TEXTS.NAV.CATALOG}
                    </S.MobileNavItem>
                    <S.MobileNavItem
                        $isActive={activeNav === NAVIGATION.ABOUT}
                        onClick={() => handleNavClick(NAVIGATION.ABOUT)}
                    >
                        {TEXTS.NAV.ABOUT}
                    </S.MobileNavItem>
                    <S.MobileNavItem
                        $isActive={activeNav === NAVIGATION.TESTIMONIALS}
                        onClick={() => handleNavClick(NAVIGATION.TESTIMONIALS)}
                    >
                        {TEXTS.NAV.TESTIMONIALS}
                    </S.MobileNavItem>
                    <S.MobileNavItem
                        $isActive={activeNav === NAVIGATION.CONTACT}
                        onClick={() => handleNavClick(NAVIGATION.CONTACT)}
                    >
                        {TEXTS.NAV.CONTACT}
                    </S.MobileNavItem>
                    <S.MobileNavItem
                        $isActive={activeNav === NAVIGATION.SHOP}
                        onClick={() => handleNavClick(NAVIGATION.SHOP)}
                    >
                        {TEXTS.NAV.SHOP}
                    </S.MobileNavItem>
                </S.MobileNavList>
            </S.MobileNavigation>

            {isMobileMenuOpen && <S.Overlay onClick={closeMobileMenu} />}
        </>
    );
};
