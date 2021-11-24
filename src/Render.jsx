import React, { Component } from 'react';
import { render } from 'react-dom';

//const App = () => <h1>Hola</h1>;

class App extends Component {
  render() {
    return <h1>hola</h1>;
  }
}

export default App;

render(<App />, document.getElementById('root'));
