import styled, { css, keyframes } from "styled-components";
import type { NotificationType } from "./types";

const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
`;

const getNotificationColors = (
    type: NotificationType,
    theme: { colors: { notification: Record<string, { bg: string; border: string }> } }
) => {
    const colors = {
        success: {
            bg: theme.colors.notification.success.bg,
            border: theme.colors.notification.success.border,
        },
        error: {
            bg: theme.colors.notification.error.bg,
            border: theme.colors.notification.error.border,
        },
        warning: {
            bg: theme.colors.notification.warning.bg,
            border: theme.colors.notification.warning.border,
        },
        info: {
            bg: theme.colors.notification.info.bg,
            border: theme.colors.notification.info.border,
        },
    };

    return colors[type];
};

export const NotificationContainer = styled.div<{
    $type: NotificationType;
    $isVisible: boolean;
}>`
    position: relative;
    min-width: 300px;
    max-width: 500px;
    padding: 16px;
    margin-bottom: 12px;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    background-color: ${({ $type, theme }) => getNotificationColors($type, theme).bg};
    border-left: 4px solid ${({ $type, theme }) => getNotificationColors($type, theme).border};
    color: ${({ theme }) => theme.colors.text.primary};

    animation: ${({ $isVisible }) =>
        $isVisible
            ? css`
                  ${slideIn} 0.3s ease-out forwards
              `
            : css`
                  ${slideOut} 0.3s ease-in forwards
              `};

    ${({ theme }) => theme.breakpoints.sm} {
        min-width: 280px;
        max-width: 90vw;
    }
`;

export const NotificationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
`;

export const NotificationTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
`;

export const NotificationMessage = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    line-height: 1.4;
    opacity: 0.95;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
    padding: 0;
    margin-left: 12px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => `${theme.colors.text.primary}20`};
    }

    &:focus {
        outline: none;
        background-color: ${({ theme }) => `${theme.colors.text.primary}30`};
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;
