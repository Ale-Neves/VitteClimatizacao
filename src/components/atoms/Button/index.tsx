import { forwardRef } from "react";
import type { ButtonProps } from "./types";
import { StyledButton, LoadingSpinner, ButtonContent } from "./styles";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = "primary",
            size = "medium",
            isLoading = false,
            isDisabled = false,
            icon,
            iconPosition = "left",
            fullWidth = false,
            className,
            type = "button",
            ...rest
        },
        ref
    ) => {
        const disabled = isDisabled || isLoading;

        return (
            <StyledButton
                ref={ref}
                type={type}
                className={className}
                disabled={disabled}
                $variant={variant}
                $size={size}
                $isLoading={isLoading}
                $isDisabled={disabled}
                $fullWidth={fullWidth}
                $hasIcon={!!icon}
                $iconPosition={iconPosition}
                {...rest}
            >
                {isLoading && <LoadingSpinner />}
                <ButtonContent $isLoading={isLoading}>
                    {icon && iconPosition === "left" && icon}
                    {children}
                    {icon && iconPosition === "right" && icon}
                </ButtonContent>
            </StyledButton>
        );
    }
);

export default Button;