import React, { useState } from "react";
import { render } from "react-dom";
import Button from "./components/Button";
import Card from "./components/Card";

const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Button></Button>
        <Card></Card>
        <button onClick={() => setTheme(themes.light)}>Modo Claro</button>
        <button onClick={() => setTheme(themes.dark)}>Modo Oscuro</button>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

render(<App />, document.getElementById("root"));
