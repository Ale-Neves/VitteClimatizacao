import type { ReactNode } from "react";

export type CookieConsentStatus = "accepted" | "rejected" | "pending";

export interface CookieContextValue {
    consentStatus: CookieConsentStatus;
    acceptCookies: () => void;
    rejectCookies: () => void;
    resetConsent: () => void;
}

export interface CookieProviderProps {
    children: ReactNode;
}
