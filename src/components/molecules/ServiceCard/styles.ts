import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ServiceCard = styled.div`
    --background: ${({ theme }) => theme.gradients.primary};
    --gradientBackground: linear-gradient(${({ theme }) => theme.colors.background.primary} 0 0);

    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: visible;
    background: transparent;
    padding: 6px;
    box-sizing: border-box;
    background-clip: padding-box, border-box;
    background-origin: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 22px;
    background-image: var(--gradientBackground), var(--background);
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 22px;
        padding: 6px;
        background: var(--background);
        -webkit-mask:
            linear-gradient(${({ theme }) => theme.colors.gray[500]} 0 0) content-box,
            linear-gradient(${({ theme }) => theme.colors.gray[500]} 0 0);
        mask:
            linear-gradient(${({ theme }) => theme.colors.gray[500]} 0 0) content-box,
            linear-gradient(${({ theme }) => theme.colors.gray[500]} 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &::after {
        position: absolute;
        content: "";
        inset: -4px;
        z-index: -1;
        border-radius: 22px;
        background: var(--background);
        opacity: 0;
        filter: blur(20px);
        transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::before {
        padding: 8px;
    }

    &:hover::after {
        opacity: 0.8;
    }
`;

export const ServiceCardInfo = styled.div`
    color: ${({ theme }) => theme.colors.gray[500]};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 320px;
    height: 380px;
    border-radius: 1rem;
    overflow: hidden;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    background: transparent;

    ${media.xs} {
        width: 240px;
        height: 360px;
        padding: 1.5rem;
        gap: 0.9rem;
    }

    ${media.xss} {
        width: 290px;
        height: 420px;
        padding: 2rem 1.5rem;
        gap: 1rem;
    }

    ${media.sm} {
        width: 242px;
        height: 420px;
        padding: 2rem 1.8rem;
        gap: 1.1rem;
    }

    ${media.md} {
        width: 265px;
        height: 411px;
        padding: 2rem 1.8rem;
        gap: 1.1rem;
    }

    ${media.lg} {
        width: 298px;
        height: 462px;
        padding: 2rem 1.8rem;
        gap: 1.1rem;
    }

    ${media.xl} {
        width: 397px;
        height: 617px;
        padding: 2.5rem 2rem;
        gap: 1.2rem;
    }
`;

export const ServiceIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
`;

export const IconImage = styled.img<{ $isACIcon?: boolean; $isLarger?: boolean }>`
    width: ${({ $isACIcon, $isLarger }) => ($isACIcon ? "130px" : $isLarger ? "120px" : "110px")};
    height: ${({ $isACIcon, $isLarger }) => ($isACIcon ? "130px" : $isLarger ? "120px" : "110px")};
    object-fit: contain;
    display: block;
    opacity: 1;

    ${media.xss} {
        width: ${({ $isACIcon, $isLarger }) => ($isACIcon ? "160px" : $isLarger ? "150px" : "135px")};
        height: ${({ $isACIcon, $isLarger }) => ($isACIcon ? "160px" : $isLarger ? "150px" : "135px")};
    }

    ${media.md} {
        width: ${({ $isACIcon, $isLarger }) =>
            $isACIcon ? "130px" : $isLarger ? "120px" : "110px"};
        height: ${({ $isACIcon, $isLarger }) =>
            $isACIcon ? "130px" : $isLarger ? "120px" : "110px"};
    }

    ${media.lg} {
        width: ${({ $isACIcon, $isLarger }) =>
            $isACIcon ? "165px" : $isLarger ? "150px" : "135px"};
        height: ${({ $isACIcon, $isLarger }) =>
            $isACIcon ? "165px" : $isLarger ? "150px" : "135px"};
    }

    ${media.xl} {
        width: ${({ $isACIcon, $isLarger }) =>
            $isACIcon ? "200px" : $isLarger ? "185px" : "170px"};
        height: ${({ $isACIcon, $isLarger }) =>
            $isACIcon ? "200px" : $isLarger ? "185px" : "170px"};
    }
`;

export const ServiceTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    line-height: ${({ theme }) => theme.lineHeights.snug};
    text-align: center;

    ${media.xss} {
        font-size: 2rem;
    }

    ${media.md} {
        font-size: 2rem;
    }

    ${media.lg} {
        font-size: 2.5rem;
    }

    ${media.xl} {
        font-size: 3rem;
    }
`;

export const ServiceDescription = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.15rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.gray[500]};
    margin: 0;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    text-align: center;

    ${media.xss} {
        font-size: 1.4rem;
    }

    ${media.md} {
        font-size: 1.375rem;
    }

    ${media.lg} {
        font-size: 1.625rem;
    }

    ${media.xl} {
        font-size: 1.875rem;
    }
`;
