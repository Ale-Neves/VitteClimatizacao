import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ContactInfoItemContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
    background: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => `${theme.colors.primary.cyan}1A`};
    border-radius: 12px;
    transition: all ${({ theme }) => theme.transitions.normal};

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary.cyan};
        transform: translateY(-2px);
        box-shadow: 0 4px 20px ${({ theme }) => `${theme.colors.primary.cyan}26`};
    }

    ${media.sm} {
        padding: 28px;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 48px;
    background: linear-gradient(135deg, ${({ theme }) => `${theme.colors.primary.cyan}1A`}, ${({ theme }) => `${theme.colors.primary.main}1A`});
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.primary.cyan};
    
    svg {
        width: 24px;
        height: 24px;
    }
`;

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Title = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.cyan};
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const Content = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: 16px;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.text.primary};
    white-space: pre-line;

    ${media.sm} {
        font-size: 17px;
    }
`;

export const ContentLink = styled.a`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: 16px;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    white-space: pre-line;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.primary.cyan};
    }

    ${media.sm} {
        font-size: 17px;
    }
`;
