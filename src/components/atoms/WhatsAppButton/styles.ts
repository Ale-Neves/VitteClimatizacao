import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(0, 255, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
    }
`;

export const FloatingButton = styled.a`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    background: ${({ theme }) => theme.colors.primary.cyan};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: ${({ theme }) => theme.zIndex.toast};
    transition: all ${({ theme }) => theme.transitions.normal};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.background.overlay};
    text-decoration: none;
    animation: ${pulse} 2s infinite;

    &:hover {
        transform: scale(1.1);
        background: ${({ theme }) => theme.colors.primary.main};
        box-shadow: 0 6px 20px rgba(0, 187, 255, 0.4);
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        width: 32px;
        height: 32px;
        fill: ${({ theme }) => theme.colors.background.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 56px;
        height: 56px;
        bottom: 1.5rem;
        right: 1.5rem;

        svg {
            width: 28px;
            height: 28px;
        }
    }
`;

export const Tooltip = styled.span`
    position: absolute;
    right: 70px;
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.primary.cyan};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    opacity: 0;
    pointer-events: none;
    transition: opacity ${({ theme }) => theme.transitions.fast};
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.background.overlay};

    ${FloatingButton}:hover & {
        opacity: 1;
    }

    &::after {
        content: "";
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translateY(-50%);
        border: 8px solid transparent;
        border-left-color: ${({ theme }) => theme.colors.background.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: none;
    }
`;
