import type {
    NotificationConfig,
    NotificationProps,
} from "../../components/atoms/Notification/types";

export interface NotificationContextType {
    notifications: NotificationProps[];
    showNotification: (config: NotificationConfig) => void;
    removeNotification: (id: string) => void;
    clearAllNotifications: () => void;
}
