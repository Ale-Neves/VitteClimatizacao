import styled from "styled-components";

export const FooterSocialContainer = styled.div`
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

export const SocialLinks = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;
