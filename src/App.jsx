import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";

import { QuestionPage } from "./components/QuestionPage";
import questions from "./data";

class Wizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: []
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
  }

  nextQuestion() {
    // TODO: add check out of boundaries + mandatory response check
    const nextStep = this.getCurrentStep() + 1;
    this.moveToStep(nextStep);
  }

  previousQuestion() {
    const previousStep = this.getCurrentStep() - 1;
    this.moveToStep(previousStep);
  }

  moveToStep(step) {
    this.props.history.push(`/questions/${step}`);
  }

  getCurrentStep() {
    return parseInt(this.props.match.params.id, 10) || 1;
  }

  render() {
    const currentStep = this.getCurrentStep();

    const index = currentStep - 1;
    const currentQuestion = this.props.questions[index];
    const currentAnswer = this.state.answers[index];

    const hasNextPage = index + 1 < this.props.questions.length;
    const hasPreviousPage = index > 0;

    return (
      <QuestionPage
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        question={currentQuestion}
        answer={currentAnswer}
        nextQuestion={this.nextQuestion}
        previousQuestion={this.previousQuestion}
      />
    );
  }
}

const WizardContainer = withRouter(Wizard);

class App extends React.Component {
  render() {
    return (
      <div className="questions">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/questions/1" />
            </Route>
            <Route
              path="/questions/:id"
              render={() => <WizardContainer {...this.props} />}
            />
          </Switch>
        </Router>
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
