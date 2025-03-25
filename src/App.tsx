import { Button } from "./components/ui/button/Button.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="success">Success Button</Button>
    </ThemeProvider>
  );
}

export default App;
