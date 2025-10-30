import { useEffect } from "react";
import type { NotificationProps } from "./types";

export const useNotification = ({ id, duration = 5000, onClose }: NotificationProps) => {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                onClose(id);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [id, duration, onClose]);

    const handleClose = () => {
        onClose(id);
    };

    return {
        handleClose,
    };
};
