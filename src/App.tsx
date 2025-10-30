import { ThemeProvider } from "styled-components";
import { NotificationProvider } from "./contexts/NotificationContext";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NotificationProvider>
                <GlobalStyle />
                <AppRoutes />
            </NotificationProvider>
        </ThemeProvider>
    );
}

export default App;
