import React from "react";
import { render } from "react-dom";
import Form from "./components/Form";

export const ThemeContext = React.createContext();

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default App;

render(<App />, document.getElementById("root"));
