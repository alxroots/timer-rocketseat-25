import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";
import { AppProvider } from "./providers/AppProvider.tsx";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppProvider>
          <Router />
        </AppProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
