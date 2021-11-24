import React, { Component } from 'react';
import { render } from 'react-dom';

const names = ['Kyo', 'Maxi', 'Afrodita', 'Agus'];

//recibe las props de entrada
const Greetings = (props) => <h2>{props.name}</h2>;

/*const ComponentTwo = () => {
  const saludo = lenguage === 'es' ? 'Hola' : 'Hello';
  return (
    <h2>
      {saludo} {name}
    </h2>
  );
};*/

const App = () => {
  return (
    <>
      <Greetings name="Kyo" />
    </>
  );
};

export default App;

render(<App />, document.getElementById('root'));
