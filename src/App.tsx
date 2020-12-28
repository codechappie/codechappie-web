import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "styled-components";
import themes from "./assets/styles/Theme";
import GlobalStyle from "./assets/styles/GlobalStyles";

function App() {
  const [theme, toggleTheme] = useState(true);

  return (
      <ThemeProvider theme={themes[theme ? 'dark' : 'light']}>
        <GlobalStyle />
        <div className="App">
          <LandingPage />
        </div>
      </ThemeProvider>
  );
}

export default App;
