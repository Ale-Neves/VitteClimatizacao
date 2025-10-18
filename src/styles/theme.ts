export const theme = {
    colors: {
        primary: {
            main: "#00BBFF",
            cyan: "#00F6FF",
        },
        background: {
            primary: "#1B1B1B",
            secondary: "#F5F5F5",
            overlay: "rgba(0, 0, 0, 0.5)",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#000000",
        },
        gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
        },
    },
    fonts: {
        primary: '"Inter", sans-serif',
        secondary: '"Montserrat", sans-serif',
    },
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    gradients: {
        primary: "linear-gradient(90deg, #00FFFF 0%, #00BBFF 100%)",
        accent: "linear-gradient(90deg, #ff3a00 0%, #ffa900 100%)",
    },
    transitions: {
        fast: "150ms ease-in-out",
        normal: "300ms ease-in-out",
        slow: "500ms ease-in-out",
        bounce: "300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    zIndex: {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        xxl: "1920px",
    },
};

export const media = {
    sm: `@media (min-width: ${theme.breakpoints.sm})`,
    md: `@media (min-width: ${theme.breakpoints.md})`,
    lg: `@media (min-width: ${theme.breakpoints.lg})`,
    xl: `@media (min-width: ${theme.breakpoints.xl})`,
    "2xl": `@media (min-width: ${theme.breakpoints["2xl"]})`,
    xxl: `@media (min-width: ${theme.breakpoints.xxl})`,
};

export type Theme = typeof theme;

export default theme;
