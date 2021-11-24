import React from 'react';
import { render } from 'react-dom';

function SaludarEnIdiomas({ idioma }) {
  if (idioma === 'en') {
    return <span>Hello</span>;
  } else {
    return <span>Hola</span>;
  }
}
const Saludo = () => {
  const name = 'Kyo';
  return (
    <p>
      <SaludarEnIdiomas idioma="es" /> desde Saludo {2 + 5} {`nombre: ${name}`}
    </p>
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
