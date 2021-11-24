import React from 'react';
import { render } from 'react-dom';

const Saludo = () => {
  const name = 'Kyo';
  const idioma = 'en';
  //podemos aplicar condicionales if else pero la sintaxys mas corta es ternario
  return (
    <div>
      {idioma === 'en' ? <p>Hello</p> : <p>hola</p>}
      <p>
        desde Saludo {2 + 5} {`nombre: ${name}`}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <h1>
      <Saludo />
    </h1>
  );
};

export default App;

render(<App />, document.getElementById('root'));
