import styled from "styled-components";
import { media } from "../../../styles/theme";

export const BrandCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    ${media.sm} {
        padding: 2rem;
    }

    ${media.md} {
        padding: 2.5rem;
    }
`;

export const BrandLogo = styled.img`
    width: 100%;
    max-width: 120px;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;

    ${BrandCard}:hover & {
        filter: grayscale(0%);
        opacity: 1;
    }

    ${media.sm} {
        max-width: 140px;
    }

    ${media.md} {
        max-width: 160px;
    }

    ${media.lg} {
        max-width: 180px;
    }

    ${media.xl} {
        max-width: 200px;
    }
`;
