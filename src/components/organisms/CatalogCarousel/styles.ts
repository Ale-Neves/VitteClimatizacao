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
    padding: 0 calc(50% - 140px);
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    -ms-overflow-style: none;
    scrollbar-width: none;

    & > * {
        flex-shrink: 0;
        scroll-snap-align: center;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    ${media.xss} {
        padding: 0 calc(50% - 165px);
    }
`;
