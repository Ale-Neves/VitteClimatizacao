export type NotificationType = "success" | "error" | "warning" | "info";

export interface NotificationProps {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
  isVisible?: boolean;
}

export interface NotificationConfig {
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
}