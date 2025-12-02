import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ServicesSectionContainer = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.primary};
    padding: 80px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.sm} {
        padding: 45px 24px;
    }

    ${media.md} {
        padding: 50px 32px;
    }

    ${media.lg} {
        padding: 60px 48px;
    }

    ${media.xl} {
        padding: 80px 64px;
    }
`;

export const MainPhrase = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary.cyan};
    text-align: center;
    margin: 0 0 3rem 0;
    line-height: ${({ theme }) => theme.lineHeights.snug};
    letter-spacing: 0.6rem;

    ${media.xss} {
        letter-spacing: 0.2rem;
        font-size: 1rem;
        margin: -5rem 0 5rem 0;
    }

    ${media.xs} {
        letter-spacing: 0.3rem;
        font-size: 1.4rem;
    }

    ${media.sm} {
        font-size: 1.75rem;
        margin: 0 0 4rem 0;
        letter-spacing: 0.3rem;
    }

    ${media.md} {
        letter-spacing: 0.6rem;
        font-size: 1.75rem;
        margin: 0 0 5rem 0;
    }

    ${media.lg} {
        font-size: 2.125rem;
        margin: 0 0 6rem 0;
    }

    ${media.xl} {
        font-size: 2.5rem;
        margin: 0 0 9rem 0;
    }
`;

export const TitlesContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;

    ${media.md} {
        margin-bottom: 6rem;
    }

    ${media.lg} {
        margin-bottom: 8rem;
    }

    ${media.xl} {
        margin-bottom: 10rem;
    }
`;

export const ServicesIcon = styled.img`
    width: 300px;
    height: auto;
    object-fit: contain;
    display: block;

    ${media.sm} {
        width: 505px;
    }

    ${media.md} {
        width: 647px;
    }

    ${media.lg} {
        width: 728px;
    }

    ${media.xl} {
        width: 970px;
    }
`;

export const ServicesGrid = styled.div`
    display: none;

    ${media.sm} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 3rem;
        column-gap: 1rem;
        max-width: 600px;
        width: 100%;
        margin-top: 3rem;
        justify-items: center;
    }

    ${media.md} {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 3rem;
        margin-top: 3rem;
        column-gap: 0rem;
        max-width: 1100px;
    }

    ${media.lg} {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 2.7rem;
        margin-top: 3rem;
        column-gap: 0rem;
        max-width: 1200px;
    }

    ${media.xl} {
        gap: 4rem;
        column-gap: 4rem;
        max-width: 1400px;
    }
`;
