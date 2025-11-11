import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContext";
import { ERROR_MESSAGES } from "../constants";

export const useNotifications = () => {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error(ERROR_MESSAGES.NOTIFICATION_PROVIDER_MISSING);
    }

    const { showNotification, removeNotification, clearAllNotifications, notifications } = context;

    const showSuccess = (title: string, message: string, duration?: number) => {
        showNotification({ type: "success", title, message, duration });
    };

    const showError = (title: string, message: string, duration?: number) => {
        showNotification({ type: "error", title, message, duration });
    };

    const showWarning = (title: string, message: string, duration?: number) => {
        showNotification({ type: "warning", title, message, duration });
    };

    const showInfo = (title: string, message: string, duration?: number) => {
        showNotification({ type: "info", title, message, duration });
    };

    return {
        notifications,
        showNotification,
        removeNotification,
        clearAllNotifications,
        showSuccess,
        showError,
        showWarning,
        showInfo,
    };
};
