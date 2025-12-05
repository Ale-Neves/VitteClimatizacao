import styled from "styled-components";

export const FooterContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.h3`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.cyan};
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    color: ${({ theme }) => theme.colors.primary.cyan};
    margin-top: 2px;

    svg {
        width: 16px;
        height: 16px;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const ContactLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 13px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ContactValue = styled.a`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[300]};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.primary.cyan};
    }
`;

export const ContactText = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[300]};
`;
