import React from "react";
import * as S from "./styles";
import type { NotificationProps } from "./types";
import { useNotification } from "./useNotification";

export const Notification: React.FC<NotificationProps> = props => {
    const { type, title, message, isVisible = true } = props;
    const { handleClose } = useNotification(props);

    return (
        <S.NotificationContainer $type={type} $isVisible={isVisible}>
            <S.NotificationHeader>
                <S.NotificationTitle>{title}</S.NotificationTitle>
                <S.CloseButton onClick={handleClose} aria-label="Fechar notificação">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </S.CloseButton>
            </S.NotificationHeader>
            <S.NotificationMessage>{message}</S.NotificationMessage>
        </S.NotificationContainer>
    );
};
