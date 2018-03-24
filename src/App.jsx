import * as React from "react";
import * as ReactDOM from "react-dom";

import { QuestionPage } from "./components/QuestionPage";
import questions from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }

  render() {
    // TODO: take if from state
    const currentQuestion = questions[this.state.currentStep];

    return (
      <div className="questions">
        <QuestionPage question={currentQuestion} />
      </div>
    );
  }
}

function run() {
  const node = document.createElement("div");
  document.body.appendChild(node);

  ReactDOM.render(<App />, node);
}

run();
