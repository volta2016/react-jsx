import React from 'react';
import { render } from 'react-dom';

const names = ['Kyo', 'Maxi', 'Afrodita', 'Agus'];

/*function getNames() {
  const elementsList = [];
  
  for (let i = 0; i < names.length; i++) elementsList.push(<li key={names[i]}>{names[i]}</li>);
  
  return elementsList;
}*/

const Names = () => {
  function generateId() {
    return Math.random() * 1;
  }

  return (
    <ul>
      {names.map((name) => (
        <li key={generateId()}>{name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <Names />
    </div>
  );
};

export default App;

render(<App />, document.getElementById('root'));
