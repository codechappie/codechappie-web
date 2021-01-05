import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "styled-components";
import themes from "./assets/styles/Theme";
import GlobalStyle from "./assets/styles/GlobalStyles";

function App() {
  const [myTheme, toggleTheme] = useState(true);

  return (
      <ThemeProvider theme={themes[myTheme ? 'dark' : 'light']}>
        <GlobalStyle />
        <div className="App">
          <LandingPage myTheme={myTheme} setDark={toggleTheme} />
        </div>
      </ThemeProvider>
  );
}

export default App;
