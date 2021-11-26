import React, { useState } from "react";
import { render } from "react-dom";
import Surprise from "./code-splitting/Surprise";

const App = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  // useEffect(() => {
  //   //import dinamicos
  //   // import("./code-splitting/Hello").then((fn) => fn.default());
  // }, []);

  return (
    <>
      <button onClick={() => setShowSurprise(!showSurprise)}>
        Mostrar Ocultar
      </button>
      {showSurprise && <Surprise />}
    </>
  );
};

export default App;

render(<App />, document.getElementById("root"));
