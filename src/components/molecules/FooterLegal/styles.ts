import styled from "styled-components";

export const FooterLegalContainer = styled.div`
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

export const LegalList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 8px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const LegalItem = styled.li`
    a {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray[300]};
        text-decoration: none;
        transition: color ${({ theme }) => theme.transitions.fast};
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.primary.cyan};
        }
    }
`;

export const CompanyInfo = styled.div`
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid ${({ theme }) => `${theme.colors.primary.cyan}1A`};
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const InfoText = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[400]};
    margin: 0;
`;
