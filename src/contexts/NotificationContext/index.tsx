import React, { createContext, useCallback, useState } from "react";
import type {
    NotificationConfig,
    NotificationProps,
} from "../../components/atoms/Notification/types";
import type { NotificationContextType } from "./types";

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
    children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<NotificationProps[]>([]);

    const generateId = useCallback(() => {
        return `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }, []);

    const removeNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    }, []);

    const showNotification = useCallback(
        (config: NotificationConfig) => {
            const id = generateId();
            const newNotification: NotificationProps = {
                id,
                onClose: removeNotification,
                isVisible: true,
                ...config,
            };

            setNotifications(prev => [...prev, newNotification]);
        },
        [generateId, removeNotification]
    );

    const clearAllNotifications = useCallback(() => {
        setNotifications([]);
    }, []);

    const value: NotificationContextType = {
        notifications,
        showNotification,
        removeNotification,
        clearAllNotifications,
    };

    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};

export { NotificationContext };
