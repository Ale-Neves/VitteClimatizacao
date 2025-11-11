import styled, { css } from "styled-components";
import type { ButtonVariant, ButtonSize, StyledButtonProps } from "./types";
import { media } from "../../../styles/theme";

const getVariantStyles = (variant: ButtonVariant) => {
    switch (variant) {
        case "primary":
            return css`
                background: ${({ theme }) => theme.colors.background.primary};
                color: ${({ theme }) => theme.colors.primary.cyan};
                border: 2px solid transparent;
                
                &:hover:not(:disabled) {
                    background: ${({ theme }) => theme.colors.gray[800]};
                    border: 2px solid ${({ theme }) => theme.colors.primary.cyan};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.background.overlay};
                }
                
                &:active:not(:disabled) {
                    transform: translateY(0);
                }
            `;
        case "secondary":
            return css`
                background: transparent;
                color: ${({ theme }) => theme.colors.background.primary};
                border: 2px solid ${({ theme }) => theme.colors.background.primary};
                
                &:hover:not(:disabled) {
                    background: ${({ theme }) => theme.colors.background.primary};
                    color: ${({ theme }) => theme.colors.primary.cyan};
                    border: 2px solid ${({ theme }) => theme.colors.primary.main};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.background.overlay};
                }
                
                &:active:not(:disabled) {
                    transform: translateY(0);
                }
            `;
        default:
            return css``;
    }
};

const getSizeStyles = (size: ButtonSize) => {
    switch (size) {
        case "small":
            return css`
                padding: 8px 16px;
                font-size: 14px;
                line-height: ${({ theme }) => theme.lineHeights.tight};

                @media (max-width: 640px) {
                    padding: 6px 12px;
                    font-size: 12px;
                }

                ${media.xxl} {
                    padding: 10px 18px;
                    font-size: 16px;
                }

                ${media["2xl"]} {
                    padding: 12px 20px;
                    font-size: 18px;
                }
            `;
        case "medium":
            return css`
                padding: 12px 24px;
                font-size: 16px;
                line-height: ${({ theme }) => theme.lineHeights.normal};

                @media (max-width: 640px) {
                    padding: 10px 16px;
                    font-size: 14px;
                }

                ${media.md} {
                    padding: 10px 20px;
                    font-size: 15px;
                }

                ${media.xxl} {
                    padding: 14px 28px;
                    font-size: 18px;
                }

                ${media["2xl"]} {
                    padding: 16px 32px;
                    font-size: 20px;
                }
            `;
        case "large":
            return css`
                padding: 16px 32px;
                font-size: 18px;
                line-height: ${({ theme }) => theme.lineHeights.normal};

                @media (max-width: 640px) {
                    padding: 12px 20px;
                    font-size: 16px;
                }
                
                ${media.md} {
                    padding: 14px 28px;
                    font-size: 17px;
                }

                ${media.xxl} {
                    padding: 18px 36px;
                    font-size: 20px;
                }

                ${media["2xl"]} {
                    padding: 20px 40px;
                    font-size: 22px;
                }
            `;
        default:
            return css``;
    }
};

export const StyledButton = styled.button<StyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    cursor: pointer;
    border-radius: 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-decoration: none;
    outline: none;
    transition: all ${({ theme }) => theme.transitions.normal};
    user-select: none;
    white-space: nowrap;
    
    ${({ $variant }) => getVariantStyles($variant)}
    ${({ $size }) => getSizeStyles($size)}
    
    ${({ $fullWidth }) =>
        $fullWidth &&
        css`
            width: 100%;
        `}
    
    ${({ $hasIcon, $iconPosition }) =>
        $hasIcon &&
        css`
            flex-direction: ${$iconPosition === "right" ? "row-reverse" : "row"};
        `}
    
    ${({ $isDisabled }) =>
        $isDisabled &&
        css`
            opacity: 0.6;
            cursor: not-allowed;
            pointer-events: none;
        `}
    
    ${({ $isLoading }) =>
        $isLoading &&
        css`
            cursor: not-allowed;
            pointer-events: none;
        `}
    
    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.primary.cyan};
        outline-offset: 2px;
    }
`;

export const LoadingSpinner = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const ButtonContent = styled.span<{ $isLoading: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
`;