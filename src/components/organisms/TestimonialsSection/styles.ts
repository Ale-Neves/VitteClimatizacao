import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TestimonialsSectionContainer = styled.section`
    width: 100%;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.sm} {
        padding: 80px 40px;
    }

    ${media.xl} {
        padding: 100px 60px;
    }
`;

export const MainPhrase = styled.h2`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.cyan};
    text-align: center;
    margin-bottom: 15px;
    letter-spacing: 1px;

    ${media.sm} {
        font-size: 16px;
    }

    ${media.xl} {
        font-size: 18px;
        margin-bottom: 20px;
    }
`;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text.primary};
    text-align: center;
    margin-bottom: 50px;

    ${media.sm} {
        font-size: 38px;
        margin-bottom: 60px;
    }

    ${media.xl} {
        font-size: 48px;
        margin-bottom: 80px;
    }
`;

export const CarouselContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    position: relative;
    padding: 0 20px;
    overflow: visible;
    
    ${media.sm} {
        padding: 0 40px;
    }
`;

export const CarouselWrapper = styled.div`
    display: flex;
    gap: 16px;
    overflow: visible;
    scroll-behavior: smooth;
    padding: 50px 10px;
    
    @media (max-width: 479px) {
        overflow: hidden;
        justify-content: center;
        position: relative;
        min-height: 420px;
    }
    
    @media (min-width: 480px) and (max-width: 639px) {
        overflow: hidden;
        justify-content: center;
        position: relative;
        min-height: 450px;
    }

    ${media.sm} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 14.4px;
        row-gap: 30px;
        justify-items: center;
        
        & > * {
            flex: none;
        }
    }

    ${media.md} {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 14.4px;
        row-gap: 30px;
    }

    ${media.lg} {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 14.4px;
        row-gap: 30px;
    }

    ${media.xl} {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 14.4px;
        row-gap: 30px;
    }
`;

export const NavigationButton = styled.button<{ $direction: "left" | "right" }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ $direction }) => ($direction === "left" ? "left: 0;" : "right: 0;")}
    background-color: ${({ theme }) => `${theme.colors.primary.main}E6`};
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    transition: all ${({ theme }) => theme.transitions.normal};
    
    ${media.sm} {
        display: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary.main};
        transform: translateY(-50%) scale(1.1);
    }

    &:active {
        transform: translateY(-50%) scale(0.95);
    }

    svg {
        width: 24px;
        height: 24px;
        fill: ${({ theme }) => theme.colors.text.primary};
        transform: ${({ $direction }) => ($direction === "left" ? "rotate(180deg)" : "rotate(0)")};
    }
`;

export const DotsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    @media (max-width: 639px) {
        display: flex;
    }

    ${media.sm} {
        display: none;
    }
`;

export const Dot = styled.button<{ $active: boolean }>`
    width: ${({ $active }) => ($active ? "16px" : "10px")};
    height: ${({ $active }) => ($active ? "16px" : "10px")};
    border-radius: 50%;
    border: none;
    background: ${({ $active, theme }) =>
        $active ? theme.gradients.primary : theme.colors.gray[600]};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.normal};
    padding: 0;
    box-shadow: ${({ $active, theme }) =>
        $active ? `0 2px 8px ${theme.colors.primary.main}80` : "none"};

    &:hover {
        transform: scale(1.2);
    }
`;

export const TestimonialWrapper = styled.div<{ $isActive: boolean }>`
    flex: 0 0 260px;

    @media (max-width: 479px) {
        flex: 0 0 280px;
        position: absolute;
        opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
        transform: ${({ $isActive }) => ($isActive ? "scale(1)" : "scale(0.95)")};
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
    }
    
    @media (min-width: 480px) and (max-width: 639px) {
        flex: 0 0 320px;
        position: absolute;
        opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
        transform: ${({ $isActive }) => ($isActive ? "scale(1)" : "scale(0.95)")};
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        pointer-events: ${({ $isActive }) => ($isActive ? "auto" : "none")};
    }
    
    ${media.sm} {
        flex: none;
        position: relative;
        opacity: 1;
        transform: scale(1);
        pointer-events: auto;
    }
    
    ${media.md} {
        flex: 0 0 280px;
    }
    
    ${media.lg} {
        flex: 0 0 300px;
    }
    
    ${media.xl} {
        flex: 0 0 300px;
    }

`;
