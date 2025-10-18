import styled from "styled-components";
import { media } from "../../../styles/theme";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    z-index: ${({ theme }) => theme.zIndex.sticky};

    ${media.md} {
        height: 75px;
    }

    ${media.lg} {
        height: 90px;
    }

    ${media.xxl} {
        height: 95px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 16px;

    ${media.sm} {
        padding: 0 24px;
    }

    ${media.md} {
        padding: 0 32px;
    }

    ${media.lg} {
        padding: 0 48px;
    }

    ${media.xl} {
        padding: 0 64px;
    }
`;

export const LogoContainer = styled.div`
    flex-shrink: 0;
`;

export const DesktopNavigation = styled.nav`
    display: none;

    ${media.lg} {
        display: block;
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 32px;
    margin: 0;
    padding: 0;
    list-style: none;

    ${media.xl} {
        gap: 40px;
    }
`;

export const NavItem = styled.li<{ $isActive?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.primary.cyan : theme.colors.text.primary};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};
    padding: 8px 0;
    position: relative;

    &:hover {
        color: ${({ theme }) => theme.colors.primary.cyan};
        transform: translateY(-1px);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
        height: 2px;
        background: ${({ theme }) => theme.gradients.primary};
        transition: ${({ theme }) => theme.transitions.normal};
    }

    &:hover::after {
        width: 100%;
    }
`;

export const MobileMenuButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};

    ${media.lg} {
        display: none;
    }
`;

export const HamburgerLine = styled.span<{ $isOpen: boolean }>`
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.text.primary};
    transition: ${({ theme }) => theme.transitions.normal};
    margin: 2px 0;
    transform-origin: center;

    &:nth-child(1) {
        transform: ${({ $isOpen }) => ($isOpen ? "translateY(7px) rotate(45deg)" : "none")};
    }

    &:nth-child(2) {
        opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
        transform: ${({ $isOpen }) => ($isOpen ? "translateY(-7px) rotate(-45deg)" : "none")};
    }
`;

export const GradientBorder = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.gradients.accent};

    ${media.md} {
        height: 4px;
    }

    ${media.lg} {
        height: 5px;
    }
`;

export const MobileNavigation = styled.nav<{ $isOpen: boolean }>`
    position: fixed;
    top: 70px;
    right: 0;
    width: 280px;
    height: calc(100vh - 70px);
    background-color: ${({ theme }) => theme.colors.background.overlay};
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: ${({ theme }) => theme.transitions.normal};
    z-index: ${({ theme }) => theme.zIndex.modal};
    border-left: 1px solid ${({ theme }) => theme.colors.gray[700]};

    ${media.md} {
        top: 85px;
        height: calc(100vh - 85px);
    }

    ${media.lg} {
        display: none;
    }
`;

export const MobileNavList = styled.ul`
    padding: 24px 0;
    margin: 0;
    list-style: none;
`;

export const MobileNavItem = styled.li<{ $isActive?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.primary.cyan : theme.colors.text.primary};
    cursor: pointer;
    padding: 16px 24px;
    transition: ${({ theme }) => theme.transitions.fast};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.gray[800] : "transparent"};

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray[800]};
        color: ${({ theme }) => theme.colors.primary.cyan};
        padding-left: 32px;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.overlay};
    z-index: ${({ theme }) => theme.zIndex.modal - 1};

    ${media.lg} {
        display: none;
    }
`;
