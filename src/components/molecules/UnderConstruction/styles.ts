import styled, { keyframes } from "styled-components";

const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background.primary};
    padding: 2rem;
    text-align: center;
`;

export const IconWrapper = styled.div`
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
    animation: ${float} 3s ease-in-out infinite;

    svg {
        width: 100%;
        height: 100%;
        
        .gear {
            transform-origin: center;
            animation: ${rotate} 4s linear infinite;
        }

        .gear-2 {
            animation-direction: reverse;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 150px;
        height: 150px;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary.cyan};
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin: 0 0 1rem 0;
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 2rem;
    }
`;

export const Message = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1rem;
    }
`;

export const BackButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.colors.primary.cyan};
    color: ${({ theme }) => theme.colors.background.primary};
    text-decoration: none;
    border-radius: 8px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-family: ${({ theme }) => theme.fonts.secondary};
    transition: all ${({ theme }) => theme.transitions.normal};
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primary.main};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 187, 255, 0.4);
    }

    &:active {
        transform: translateY(0);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const ProgressContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 2rem auto 1rem;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 8px;
    background: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 4px;
    overflow: hidden;
    position: relative;
`;

const progress = keyframes`
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const ProgressFill = styled.div`
    height: 100%;
    width: 50%;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: 4px;
    animation: ${progress} 2s ease-in-out infinite;
`;

export const ProgressText = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.7;
    margin-top: 0.5rem;
`;
