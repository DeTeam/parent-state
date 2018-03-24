import * as React from "react";

const Question = ({ question }) => (
  <div className="question">{question.question}</div>
);
const PreviousButton = props => <button {...props}>Previous question</button>;
const NextButton = props => <button {...props}>Next question</button>;

export class QuestionPage extends React.Component {
  render() {
    const {
      hasPreviousPage,
      hasNextPage,
      nextQuestion,
      previousQuestion
    } = this.props;

    return (
      <div>
        <PreviousButton
          onClick={previousQuestion}
          disabled={!hasPreviousPage}
        />
        <Question question={this.props.question} />
        <NextButton onClick={nextQuestion} disabled={!hasNextPage} />
      </div>
    );
  }
}
