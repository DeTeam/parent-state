import * as React from "react";

const Question = ({ question }) => (
  <div className="question">{question.question}</div>
);
const PreviousButton = () => <button>Previous question</button>;
const NextButton = () => <button>Next question</button>;

export class QuestionPage extends React.Component {
  render() {
    return (
      <div>
        <PreviousButton />
        <Question question={this.props.question} />
        <NextButton />
      </div>
    );
  }
}
