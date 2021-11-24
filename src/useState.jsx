import React, { useState } from 'react';
import { render } from 'react-dom';

const Button = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);

  const handleSubtract = () => setCount(count - 1);

  const handleReset = () => setCount(0);

  return (
    <div>
      <p>{count}</p>
      <button style={{ margin: '5px' }} onClick={handleAdd}>
        +
      </button>
      <button style={{ margin: '5px' }} onClick={handleSubtract}>
        -
      </button>
      <button style={{ margin: '5px' }} onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default App;

render(<App />, document.getElementById('root'));
