import styled, { css } from "styled-components";

interface BannerProps {
    $isVisible: boolean;
}

export const BannerContainer = styled.div<BannerProps>`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.background.primary};
    border-top: 2px solid ${({ theme }) => theme.colors.primary.cyan};
    padding: 1.5rem;
    z-index: ${({ theme }) => theme.zIndex.toast};
    box-shadow: 0 -4px 12px ${({ theme }) => theme.colors.background.overlay};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "100%")});
    transition: transform ${({ theme }) => theme.transitions.normal};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 1rem;
    }
`;

export const BannerContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
`;

export const TextContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Title = styled.h3`
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary.cyan};
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1rem;
    }
`;

export const Description = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    opacity: 0.9;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 0.8125rem;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary.cyan};
    text-decoration: underline;
    cursor: pointer;
    transition: opacity ${({ theme }) => theme.transitions.fast};

    &:hover {
        opacity: 0.8;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        flex-direction: column;
    }
`;

const buttonBaseStyles = css`
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-family: ${({ theme }) => theme.fonts.secondary};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.normal};
    border: 2px solid transparent;
    white-space: nowrap;

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        padding: 0.625rem 1rem;
    }
`;

export const AcceptButton = styled.button`
    ${buttonBaseStyles}
    background: ${({ theme }) => theme.colors.primary.cyan};
    color: ${({ theme }) => theme.colors.background.primary};
    border-color: ${({ theme }) => theme.colors.primary.cyan};

    &:hover {
        background: ${({ theme }) => theme.colors.primary.main};
        border-color: ${({ theme }) => theme.colors.primary.main};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 187, 255, 0.4);
    }
`;

export const RejectButton = styled.button`
    ${buttonBaseStyles}
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border-color: ${({ theme }) => theme.colors.gray[600]};

    &:hover {
        background: ${({ theme }) => theme.colors.gray[800]};
        border-color: ${({ theme }) => theme.colors.gray[500]};
        transform: translateY(-2px);
    }
`;
