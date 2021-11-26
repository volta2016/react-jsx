import React, { useState } from "react";
import { render } from "react-dom";

const Saludo = () => {
  const [name, setName] = useState("");
  return (
    <div>
      {/*SyntheticEvent*/}
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Hola {name} !</p>
      <a href="#" onClick={(e) => e.preventDefault()}>
        GO
      </a>
    </div>
  );
};

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <>
      <Saludo />
    </>
  );
};

export default App;

render(<App />, document.getElementById("root"));
