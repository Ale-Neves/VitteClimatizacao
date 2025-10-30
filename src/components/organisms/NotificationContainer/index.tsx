import React from "react";
import { useNotifications } from "../../../hooks/useNotifications";
import { Notification } from "../../atoms/Notification";
import * as S from "./styles";

export const NotificationContainer: React.FC = () => {
    const { notifications } = useNotifications();
    if (notifications.length === 0) return null;

    return (
        <S.NotificationPortal>
            {notifications.map(notification => (
                <Notification key={notification.id} {...notification} />
            ))}
        </S.NotificationPortal>
    );
};
