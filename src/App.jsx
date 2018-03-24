import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }

  render() {
    return <div>Test</div>;
  }
}

function run() {
  const node = document.createElement("div");
  document.body.appendChild(node);

  ReactDOM.render(<App />, node);
}

run();
