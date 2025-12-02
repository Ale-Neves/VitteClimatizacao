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
    padding: 0rem 3rem;
    margin-top: 60px;
    align-items: flex-end;

    ${media.sm} {
        padding: 0px 1.5rem;
        min-height: 400px;
        margin-top: 60px;
    }

    ${media.md} {
        padding: 0rem 32px;
        min-height: 380px;
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

    ${media.xl} {
        padding: 0px 64px;
        min-height: 600px;
        margin-top: 105px;
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

    ${media.sm} {
        position: relative;
        top: -40px;
    }

    ${media.md} {
        top:-30px;
    }

    ${media.lg} {
        top: 46px;
        gap: 3rem;
        max-width: 60%;
    }

    ${media.xl} {
        top: 15px;
    }
`;

export const BannerText = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.loose};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
    text-align: left;

    ${media.sm} {
        font-size: 1.625rem;
        line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }

    ${media.md} {
        font-size: 1.75rem;
        line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }

    ${media.lg} {
        font-size: 2rem;
        line-height: ${({ theme }) => theme.lineHeights.relaxed};
    }

    ${media.xl} {
        font-size: 2.375rem;
        line-height: ${({ theme }) => theme.lineHeights.normal};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    position: relative;
    z-index: 999;

    @media (max-width: 640px) {
        gap: 0.75rem;
    }

    button {
        padding: 12px 24px !important;
        font-size: 16px !important;
        height: auto;
    }

    ${media.sm} {
        flex-direction: row;
        gap: 1.5rem;
        
        button {
            padding: 16px 32px !important;
            font-size: 18px !important;
        }
    }

    ${media.md} {
        gap: 1.5rem;
        
        button {
            flex: 1;
            min-width: 0;
            max-width: none;
        }
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
    min-width: 295px;
    min-height: 228px;
    object-fit: contain;
    border-radius: 0.75rem;
    position: absolute;
    bottom: 0;
    right: 28%;
    transform: translateX(50%);
    z-index: 998;

    ${media.sm} {
        right: 30%;
        width: 350px;
    }

    ${media.md} {
        width: 320px;
    }

    ${media.lg} {
        width: 380px;
        right: 0;
        transform: none;
    }

    ${media.xl} {
        width: 500px;
    }
`;
