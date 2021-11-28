import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import PropTypes from "proptypes";

const FunctionalComponent = () => {
  const [contador, setContador] = useState(initialState);
  useEffect(() => {
    //efectos secundarios
    console.log("Fui actualizado FComponent");
    return () => {
      alert("adios!");
    };
  }, []);

  return (
    <>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Add</button>
    </>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      updatedAt: null,
    };
    // this.addCounter = this.addCounter.bind(this);
  }

  componentDidMount() {
    console.log("Fui creado Montaje!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);

    if (prevState.contador !== this.state.contador) {
      this.setState({
        updatedAt: new Date(),
      });
    }
    console.log("Fui actualizado!");
  }
  // componentWillUnmount() {
  //   //cada ves que se desmonte de la UI >
  //   alert("adios!");
  // }

  addCounter = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  static defaultProps = {
    name: "Cody Default",
  };

  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.addCounter}>Add</button>
      </>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));
