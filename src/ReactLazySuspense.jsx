import React, { useState, Suspense } from "react";
import { render } from "react-dom";
// import Surprise from "./code-splitting/Surprise";

const Ocean = React.lazy(() => import("./reactlazy-suspense/Ocean"));

const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  // useEffect(() => {
  //   //import dinamicos
  //   // import("./code-splitting/Hello").then((fn) => fn.default());
  // }, []);

  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>
        Mostrar Ocultar
      </button>
      {showComponent && (
        <Suspense fallback={<p>Cargando...</p>}>
          <Ocean />
        </Suspense>
      )}
    </>
  );
};

export default App;

render(<App />, document.getElementById("root"));
