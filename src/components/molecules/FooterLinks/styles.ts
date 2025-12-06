import styled from "styled-components";

export const FooterLinksContainer = styled.div`
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

export const LinksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 8px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const LinkItem = styled.li`
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
