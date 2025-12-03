import styled from "styled-components";
import { media } from "../../../styles/theme";

export const HistorySectionContainer = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.primary};
    padding: 0px 24px 30px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.sm} {
        padding: 40px 32px;
    }

    ${media.md} {
        padding: 80px 48px;
        flex-direction: row;
        gap: 4rem;
        align-items: center;
        justify-content: center;
        max-width: 90%;
        margin: 0 auto;
    }

    ${media.lg} {
        padding: 90px 64px;
        gap: 5rem;
        max-width: 85%;
    }

    ${media.xl} {
        padding: 100px 80px;
        gap: 6rem;
        max-width: 80%;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;

    ${media.md} {
        align-items: flex-start;
        text-align: left;
    }

    ${media.xl} {
        width: 50%;
    }
`;

export const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary.cyan};
    margin: 0 0 1.5rem 0;
    letter-spacing: 0.2rem;

    ${media.sm} {
        font-size: 1.75rem;
        letter-spacing: 0.3rem;
    }

    ${media.md} {
        font-size: 2rem;
        margin: 0 0 2rem 0;
    }

    ${media.lg} {
        font-size: 2.5rem;
    }

    ${media.xl} {
        font-size: 2.75rem;
        margin: 0 0 2.5rem 0;
        letter-spacing: 0.4rem;
    }
`;

export const Subtitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 0 1.5rem 0;
    line-height: ${({ theme }) => theme.lineHeights.normal};
    padding-bottom: 1rem;

    ${media.xss} {
        font-size: 1.75rem;
    }

    ${media.xs} {
        font-size: 2rem;
    }

    ${media.sm} {
        font-size: 2.375rem;
    }

    ${media.md} {
        font-size: 2.5rem;
        margin: 0 0 2rem 0;
    }

    ${media.lg} {
        font-size: 3rem;
    }

    ${media.xl} {
        font-size: 3.5rem;
        margin: 0 0 2.5rem 0;
        padding-bottom: 1.5rem;
    }
`;

export const SubtitleHighlight = styled.span`
    color: ${({ theme }) => theme.colors.primary.cyan};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.primary.cyan};

        ${media.xl} {
            height: 4px;
            bottom: -0.75rem;
        }
    }
`;

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    margin: 0 0 1.5rem 0;
    letter-spacing: 0.02em;
    width: 100%;
    max-width: 90%;

    ${media.xs} {
        font-size: 1.1875rem;
        max-width: 78%;
    }

    ${media.sm} {
        font-size: 1.25rem;
        max-width: 80%;
    }

    ${media.md} {
        font-size: 1.375rem;
        margin: 0 0 2rem 0;
        max-width: 65%;
    }

    ${media.lg} {
        font-size: 1.5rem;
        max-width: 68%;
    }

    ${media.xl} {
        font-size: 1.75rem;
        margin: 0 0 2.5rem 0;
        line-height: 1.54;
        letter-spacing: 0.08em;
        max-width: 90%;
    }
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;

    ${media.xs} {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    ${media.sm} {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
    }

    ${media.md} {
        gap: 3rem;
        margin-top: 2.5rem;
    }

    ${media.lg} {
        gap: 3.5rem;
        margin-top: 3rem;
    }

    ${media.xl} {
        gap: 4rem;
        margin-top: 3.5rem;
    }
`;

export const StatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.08);
    }

    ${media.md} {
        align-items: flex-start;
    }
`;

export const StatNumber = styled.span`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary.cyan};
    line-height: 1;
    margin-bottom: 0.75rem;

    ${media.xs} {
        font-size: 3.25rem;
    }

    ${media.sm} {
        font-size: 3.5rem;
    }

    ${media.md} {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }

    ${media.lg} {
        font-size: 4.5rem;
    }

    ${media.xl} {
        font-size: 5rem;
        margin-bottom: 1.25rem;
    }
`;

export const StatLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
    letter-spacing: 0.1rem;
    line-height: ${({ theme }) => theme.lineHeights.snug};

    ${media.xs} {
        font-size: 1.0625rem;
    }

    ${media.sm} {
        font-size: 1.125rem;
    }

    ${media.md} {
        font-size: 1rem;
        letter-spacing: 0.15rem;
    }

    ${media.lg} {
        font-size: 1.25rem;
    }

    ${media.xl} {
        font-size: 1.75rem;
        letter-spacing: 0.2rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;
    display: none;
    justify-content: center;
    align-items: center;

    ${media.md} {
        display: flex;
        margin-top: 0;
        width: 50%;
    }

    ${media.xl} {
        width: 50%;
    }
`;

export const HistoryImage = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;

    ${media.md} {
        max-width: 400px;
    }

    ${media.lg} {
        max-width: 450px;
    }

    ${media.xl} {
        max-width: 480px;
        max-height: 720px;
        width: 100%;
        height: auto;
        border-radius: 41px;
    }
`;
