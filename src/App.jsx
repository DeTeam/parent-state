import * as React from "react";
import * as ReactDOM from "react-dom";

import { QuestionPage } from "./components/QuestionPage";
import questions from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      answers: []
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
  }

  nextQuestion() {
    // TODO: add check out of boundaries + mandatory response check
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  }
  previousQuestion() {
    // TODO: add check out of boundaries
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  }

  render() {
    // TODO: take if from state
    const currentQuestion = this.props.questions[this.state.currentStep];
    const currentAnswer = this.state.answers[this.state.currentStep];

    const hasNextPage =
      this.state.currentStep + 1 < this.props.questions.length;
    const hasPreviousPage = this.state.currentStep > 0;

    return (
      <div className="questions">
        <QuestionPage
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          question={currentQuestion}
          answer={currentAnswer}
          nextQuestion={this.nextQuestion}
          previousQuestion={this.previousQuestion}
        />
      </div>
    );
  }
}

function run() {
  const node = document.createElement("div");
  document.body.appendChild(node);

  ReactDOM.render(<App questions={questions} />, node);
}

run();
