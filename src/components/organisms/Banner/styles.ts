import styled from "styled-components";
import { media } from "../../../styles/theme";

export const BannerContainer = styled.section`
    width: 100%;
    min-height: 350px;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.primary.cyan},
        ${({ theme }) => theme.colors.primary.main}
    );
    display: flex;
    align-items: center;
    padding: 3rem 1rem;
    margin-top: 60px;
    align-items: flex-end;

    ${media.sm} {
        padding: 0px 1.5rem;
        min-height: 400px;
        margin-top: 60px;
    }

    ${media.md} {
        padding: 0rem 32px;
        min-height: 450px;
        margin-top: 75px;
    }

    ${media.lg} {
        padding: 0px 48px;
        min-height: 500px;
        margin-top: 90px;
    }

    ${media.xl} {
        padding: 0px 64px;
        min-height: 536px;
        margin-top: 90px;
    }

    ${media.xxl} {
        min-height: 600px;
        margin-top: 105px;
    }

    ${media["2xl"]} {
        min-height: 650px;
        margin-top: 110px;
    }
`;

export const BannerContent = styled.div`
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
    flex-direction: row;
    align-items: stretch;

    ${media.lg} {
        gap: 60px;
    }

    ${media.xl} {
        gap: 5rem;
    }
`;

export const TextSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.lg} {
        gap: 3rem;
        max-width: 60%;
    }
`;

export const BannerText = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.loose};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
    text-align: left;

    ${media.sm} {
        font-size: 1.5rem;
        line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }

    ${media.md} {
        font-size: 1.25rem;
        line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }

    ${media.lg} {
        font-size: 1.5rem;
        line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }

    ${media.xl} {
        font-size: 1.875rem;
        line-height: ${({ theme }) => theme.lineHeights.normal};
    }

    ${media.xxl} {
        font-size: 2.25rem;
        line-height: ${({ theme }) => theme.lineHeights.normal};
    }

    ${media["2xl"]} {
        font-size: 2.625rem;
        line-height: ${({ theme }) => theme.lineHeights.normal};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    ${media.sm} {
        flex-direction: row;
        gap: 1.5rem;
    }

    ${media.md} {
        gap: 1.5rem;
    }
`;

export const ImageSection = styled.div`
    flex: 1;
    position: relative;
    height: 100%;
    min-height: 300px;

    ${media.lg} {
        max-width: 40%;
        min-height: 400px;
    }

    ${media.xl} {
        min-height: 450px;
    }
`;

export const BannerImage = styled.img`
    width: 300px;
    height: auto;
    object-fit: contain;
    border-radius: 0.75rem;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);

    ${media.sm} {
        width: 350px;
    }

    ${media.md} {
        width: 400px;
    }

    ${media.lg} {
        width: 430px;
        right: 0;
        transform: none;
    }

    ${media.xl} {
        width: 450px;
    }

    ${media.xxl} {
        width: 500px;
    }

    ${media["2xl"]} {
        width: 530px;
    }
`;
