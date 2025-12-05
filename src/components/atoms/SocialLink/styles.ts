import styled from "styled-components";

export const SocialLinkContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid ${({ theme }) => `${theme.colors.primary.cyan}1A`};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: all ${({ theme }) => theme.transitions.normal};
    text-decoration: none;

    svg {
        width: 20px;
        height: 20px;
        fill: currentColor;
    }

    &:hover {
        background: ${({ theme }) => `${theme.colors.primary.cyan}1A`};
        border-color: ${({ theme }) => theme.colors.primary.cyan};
        color: ${({ theme }) => theme.colors.primary.cyan};
        transform: translateY(-3px);
    }
`;
