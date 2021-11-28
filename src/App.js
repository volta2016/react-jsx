import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "proptypes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  static defaultProps = {
    name: "Cody Default",
  };

  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    console.log(this.props);
    return (
      <>
        <p>Contador: {this.state.contador}</p>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Add
        </button>
      </>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));
