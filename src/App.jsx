import * as React from "react";
import * as ReactDOM from "react-dom";

import { QuestionPage } from "./QuestionPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0
    };
  }

  render() {
    // TODO: take if from state
    const currentQuestion = {
      question: "Which sports do you like?"
    };

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
