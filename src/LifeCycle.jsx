import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Component = () => {
  return (
    <div>
      <h2>Ciclo de vida de un componente de tipo class:</h2>
      <p>componentDidMount</p>
      <p>componentDidUpdate</p>
      <p>componentWillUnmount</p>
    </div>
  );
};

const Button = () => {
  //aqui no debe haber efectos secundarios

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('me ejecute');
    //sejecuta cuando el componente es eliminado
    return () => console.log('adios');
  }, []);

  return (
    <div>
      <h2>Ciclo de vida de un componente functional:</h2>
      <p>useEffect: sejecuta una primera vez al montarse</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <>
      <Component />
      <hr />
      <button onClick={() => setShowButton(false)}>eliminar button</button>
      <div></div>
      {showButton && <Button />}
    </>
  );
};

export default App;

render(<App />, document.getElementById('root'));
