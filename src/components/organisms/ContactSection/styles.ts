import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ContactSectionContainer = styled.section`
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
    margin-bottom: 60px;

    ${media.sm} {
        font-size: 38px;
        margin-bottom: 70px;
    }

    ${media.xl} {
        font-size: 48px;
        margin-bottom: 80px;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    ${media.md} {
        grid-template-columns: 550px 1fr;
        gap: 60px;
    }

    ${media.lg} {
        grid-template-columns: 580px 1fr;
    }

    ${media.xl} {
        grid-template-columns: 600px 1fr;
        gap: 80px;
    }
`;

export const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MapContainer = styled.div`
    width: 100%;
    max-width: 1400px;
    margin-top: 60px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => `${theme.colors.primary.cyan}1A`};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

    ${media.sm} {
        margin-top: 80px;
    }

    iframe {
        width: 100%;
        height: 400px;
        border: none;

        ${media.sm} {
            height: 450px;
        }

        ${media.xl} {
            height: 500px;
        }
    }
`;
