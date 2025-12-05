import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

export const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
    
    span {
        color: ${({ theme }) => theme.colors.primary.cyan};
    }
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
    width: 100%;
    padding: 14px 16px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text.primary};
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid ${({ theme, $hasError }) => 
        $hasError ? theme.colors.notification.error.bg : "rgba(255, 255, 255, 0.1)"};
    border-radius: 8px;
    outline: none;
    transition: all ${({ theme }) => theme.transitions.fast};

    &:focus {
        border-color: ${({ theme, $hasError }) => 
            $hasError ? theme.colors.notification.error.bg : theme.colors.primary.cyan};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray[500]};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.notification.error.bg};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
`;
