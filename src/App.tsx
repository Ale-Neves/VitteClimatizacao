import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "./contexts/NotificationContext";
import { CookieProvider } from "./contexts/CookieContext";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { WhatsAppButton } from "./components/atoms/WhatsAppButton";
import { CookieBanner } from "./components/molecules/CookieBanner";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CookieProvider>
                <NotificationProvider>
                    <GlobalStyle />
                    <AppRoutes />
                    <WhatsAppButton />
                    <CookieBanner />
                </NotificationProvider>
            </CookieProvider>
        </ThemeProvider>
    );
}

export default App;
