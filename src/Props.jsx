import React, { Component } from 'react';
import { render } from 'react-dom';

const names = ['Kyo', 'Maxi', 'Afrodita', 'Agus'];

//recibe las props de entrada
const Greetings = (props) => <h2>{props.name}</h2>;

// es normal ocupar el destructuring en la props que recibe el component
/*const GreetingsTwo = ({ name, lenguage }) => {
  const saludo = lenguage === 'es' ? 'Hola' : 'Hello';
  return (
    <h2>
      {saludo} {name}
    </h2>
  );
};

//default props
GreetingsTwo.defaultProps = {
  lenguage: 'en',
};*/

//es6 default params solo se utiliza si no le paso un valor al props forma recomendada

const GreetingsTwo = ({ name, lenguage }) => {
  const saludo = lenguage === 'es' ? 'Hola' : 'Hello';
  return (
    <h2>
      {saludo} {name}
    </h2>
  );
};

const GreetingsThree = ({ name, lenguage = 'en' }) => {
  const saludo = lenguage === 'es' ? 'Hola' : 'Hello';
  return (
    <h2>
      {saludo} {name}
    </h2>
  );
};

const App = () => {
  return (
    <>
      <Greetings name="Kyo" />
      <GreetingsTwo name="Scar" lenguage="es" />
      <GreetingsThree name="Scar" />
    </>
  );
};

export default App;

render(<App />, document.getElementById('root'));