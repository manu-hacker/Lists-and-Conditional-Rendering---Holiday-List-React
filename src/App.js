import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",

      showPara: false,
    };
  }

  onClick = () => {
    // this.setState((this.state.showPara = true));
    this.setState({ showPara: true });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.onClick}>
          Button
        </button>
        {this.state.showPara && <p id="para">{this.state.text}</p>}
      </div>
    );
  }
}

export default App;
