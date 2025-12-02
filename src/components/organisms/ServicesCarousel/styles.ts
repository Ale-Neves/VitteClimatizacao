import styled from "styled-components";
import { media } from "../../../styles/theme";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    gap: 2rem;
    overflow: hidden;

    ${media.sm} {
        display: none;
    }
`;

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    touch-action: pan-x;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    gap: 1rem;
    padding: 0 calc(50% - 120px);
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    -ms-overflow-style: none;
    scrollbar-width: none;

    & > * {
        flex-shrink: 0;
        scroll-snap-align: center;
        width: 240px;
        height: 400px;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    ${media.xss} {
        padding: 0 calc(50% - 145px);
        
        & > * {
            width: 290px;
            height: 430px;
        }
    }
`;

export const CarouselControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
`;

export const ArrowButton = styled.button`
    background: transparent;
    border: none;
    width: 0;
    height: 0;
    border-style: solid;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.normal};
    padding: 0;

    &:first-of-type {
        border-width: 15px 20px 15px 0;
        border-color: transparent ${({ theme }) => theme.colors.primary.cyan} transparent transparent;
    }

    &:last-of-type {
        border-width: 15px 0 15px 20px;
        border-color: transparent transparent transparent ${({ theme }) => theme.colors.primary.cyan};
    }

    &:hover {
        transform: scale(1.15);
        filter: brightness(1.2);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const ArrowIcon = styled.span`
    display: none;
`;

export const DotsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
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
    box-shadow: ${({ $active }) =>
        $active ? "0 2px 8px rgba(0, 187, 255, 0.5)" : "none"};

    &:hover {
        transform: scale(1.2);
    }
`;
