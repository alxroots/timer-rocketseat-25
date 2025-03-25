import { Button } from "./components/ui/button/Button.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Button>Danger Button</Button>
      <Button>Success Button</Button>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
