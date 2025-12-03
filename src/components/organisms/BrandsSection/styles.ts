import styled from "styled-components";
import { media } from "../../../styles/theme";

export const BrandsSectionContainer = styled.section`
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

    ${media.sm} {
        margin-bottom: 3rem;
    }

    ${media.md} {
        margin-bottom: 3.5rem;
    }

    ${media.lg} {
        margin-bottom: 4rem;
    }

    ${media.xl} {
        margin-bottom: 5rem;
    }
`;

export const BrandsIcon = styled.img`
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

export const BrandsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 600px;
    width: 100%;
    margin-top: 3rem;
    justify-items: center;

    ${media.sm} {
        grid-template-columns: repeat(3, 1fr);
        max-width: 800px;
        gap: 3rem;
    }

    ${media.md} {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1000px;
        gap: 4rem;
    }

    ${media.lg} {
        grid-template-columns: repeat(6, 1fr);
        max-width: 1200px;
        gap: 3rem;
    }

    ${media.xl} {
        grid-template-columns: repeat(6, 1fr);
        max-width: 1400px;
        gap: 4rem;
    }
`;

export const BrandsDivider = styled.div`
    width: 100%;
    max-width: 95%;
    height: 2px;
    background: linear-gradient(
        to right,
        #f2f2f2 0%,
        #1b1b1b 42%,
        #f2f2f2 100%
    );
    margin-top: 4rem;

    ${media.sm} {
        margin-top: 4.5rem;
        max-width: 92%;
    }

    ${media.md} {
        margin-top: 5rem;
        max-width: 88%;
    }

    ${media.lg} {
        margin-top: 6rem;
        max-width: 85%;
    }

    ${media.xl} {
        margin-top: 7rem;
        max-width: 82%;
    }
`;
