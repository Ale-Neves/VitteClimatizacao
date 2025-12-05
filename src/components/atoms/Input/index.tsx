import { forwardRef } from "react";
import type { InputProps } from "./types";
import * as S from "./styles";

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, isRequired = false, ...rest }, ref) => {
        return (
            <S.InputContainer>
                {label && (
                    <S.Label>
                        {label}
                        {isRequired && <span> *</span>}
                    </S.Label>
                )}
                <S.StyledInput ref={ref} $hasError={!!error} {...rest} />
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            </S.InputContainer>
        );
    }
);

Input.displayName = "Input";
