import styled from "styled-components";
import { media } from "../../../styles/theme";

export const FooterContainer = styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.colors.background.primary};
    border-top: 1px solid ${({ theme }) => `${theme.colors.primary.cyan}1A`};
    padding: 60px 20px 30px;

    ${media.sm} {
        padding: 80px 40px 30px;
    }

    ${media.xl} {
        padding: 100px 60px 40px;
    }
`;

export const FooterContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    ${media.sm} {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    ${media.md} {
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 50px;
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const CollapsibleSection = styled.div<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => `${theme.colors.primary.cyan}0D`};
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: 720px) {
        border: none;
        border-radius: 0;
    }
`;

export const SectionHeader = styled.button<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    background: ${({ $isOpen, theme }) =>
        $isOpen ? `${theme.colors.primary.cyan}0D` : "transparent"};
    border: none;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.normal};
    outline: none;

    &:hover {
        background: ${({ theme }) => `${theme.colors.primary.cyan}0D`};
    }

    &:focus,
    &:focus-visible {
        outline: none;
    }

    @media (min-width: 720px) {
        display: none;
    }
`;

export const SectionTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.cyan};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
`;

export const SectionIcon = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary.cyan};
    transition: transform ${({ theme }) => theme.transitions.normal};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const SectionContent = styled.div<{ $isOpen: boolean }>`
    max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
    overflow: hidden;
    transition: max-height ${({ theme }) => theme.transitions.normal};
    padding: ${({ $isOpen }) => ($isOpen ? "0 16px 16px" : "0 16px")};

    @media (min-width: 720px) {
        max-height: none;
        overflow: visible;
        padding: 0;
    }
`;

export const LogoSection = styled(FooterSection)`
    ${media.md} {
        max-width: 350px;
    }
`;

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-top: 16px;
`;

export const FooterDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => `${theme.colors.primary.cyan}1A`};
    margin: 40px 0 30px;

    ${media.sm} {
        margin: 50px 0 30px;
    }
`;

export const FooterBottom = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;

    ${media.sm} {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
`;

export const Copyright = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray[500]};
`;

export const DevelopedBy = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray[500]};

    a {
        color: ${({ theme }) => theme.colors.primary.cyan};
        text-decoration: none;
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        transition: opacity ${({ theme }) => theme.transitions.fast};

        &:hover {
            opacity: 0.8;
        }
    }
`;
