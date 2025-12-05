import styled from "styled-components";
import { media } from "../../../styles/theme";

export const CatalogSectionContainer = styled.section`
    width: 100%;
    background-color: #2a2a2a;
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

export const ProductsGrid = styled.div<{ $showAll: boolean }>`
    display: none;
    width: 100%;
    max-width: 1600px;
    justify-items: center;
    margin-bottom: 60px;

    /* SM: 2 colunas, mostra 2 cards */
    ${media.sm} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        
        & > * {
            display: flex;
        }
        
        ${({ $showAll }) =>
            !$showAll &&
            `
            & > *:nth-child(n+3) {
                display: none !important;
            }
        `}
    }

    /* MD: 3 colunas, mostra 3 cards */
    ${media.md} {
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
        
        ${({ $showAll }) =>
            !$showAll &&
            `
            & > *:nth-child(n+3) {
                display: flex !important;
            }
            & > *:nth-child(n+4) {
                display: none !important;
            }
        `}
    }

    /* LG: 3 colunas, mostra 3 cards */
    ${media.lg} {
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
        
        ${({ $showAll }) =>
            !$showAll &&
            `
            & > *:nth-child(n+3) {
                display: flex !important;
            }
            & > *:nth-child(n+4) {
                display: none !important;
            }
        `}
    }

    /* XL: 4 colunas, mostra 4 cards */
    ${media.xl} {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
        margin-bottom: 80px;
        
        ${({ $showAll }) =>
            !$showAll &&
            `
            & > *:nth-child(3),
            & > *:nth-child(4) {
                display: flex !important;
            }
            & > *:nth-child(n+5) {
                display: none !important;
            }
        `}
    }
`;

export const ViewMoreContainer = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    transition: transform ${({ theme }) => theme.transitions.normal};

    &:hover {
        transform: scale(1.05);
    }

    ${media.sm} {
        display: flex;
    }
`;

export const ViewMoreText = styled.span`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary.cyan};
    text-align: center;

    ${media.xl} {
        font-size: 24px;
    }
`;

export const ViewMoreUnderline = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary.cyan};
    border-radius: 2px;
`;
