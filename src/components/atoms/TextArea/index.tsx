import { forwardRef } from "react";
import type { TextAreaProps } from "./types";
import * as S from "./styles";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, error, isRequired = false, ...rest }, ref) => {
        return (
            <S.TextAreaContainer>
                {label && (
                    <S.Label>
                        {label}
                        {isRequired && <span> *</span>}
                    </S.Label>
                )}
                <S.StyledTextArea ref={ref} $hasError={!!error} {...rest} />
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            </S.TextAreaContainer>
        );
    }
);

TextArea.displayName = "TextArea";
