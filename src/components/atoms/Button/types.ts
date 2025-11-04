import type { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    isDisabled?: boolean;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
    className?: string;
}

export interface StyledButtonProps {
    $variant: ButtonVariant;
    $size: ButtonSize;
    $isLoading: boolean;
    $isDisabled: boolean;
    $fullWidth: boolean;
    $hasIcon: boolean;
    $iconPosition?: "left" | "right";
}
