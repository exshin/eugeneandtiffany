import React from 'react';
import { Button, Table, Row, Col } from 'react-bootstrap'

import $ from 'jquery'

class TobyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizStart: false,
      currentQuestionNumber: 0,
      score: 0.0,
      gameData: {
        options: [
          ['toby_1.jpg', 'fake_cat_1.jpg'],
          ['toby_2.jpg', 'fake_cat_3.jpg'],
          ['toby_3.jpg', 'fake_cat_5.jpg'],
        ],
        answers: [
          'toby_1.jpg',
          'toby_2.jpg',
          'toby_3.jpg'
        ]
      }
    };
  }

  componentDidMount() {
    // Pull game data
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  __gameStartClick() {
    this.setState({
      quizStart: true
    });
  }

  __answerClick(answer) {
    const { gameData, currentQuestionNumber, score } = this.state;
    const { answers } = gameData;

    const currentAnswer = answers[currentQuestionNumber];
    const correctAnswer = answers[currentQuestionNumber];

    if (currentAnswer === correctAnswer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestionNumber: currentQuestionNumber + 1
    });

    $('.answer-button').map((i, button) => {
      button.blur();
    });
  }

  __quizAnswers(currentOption) {
    // TODO: Need to implement button images with the currentOption as the image name
    return (
      <td key={currentOption}>
        <div className="answer">
          <Button className="answer-button" onClick={this.__answerClick.bind(this, currentOption)} block>{currentOption}</Button>
        </div>
      </td>
    )
  }

  __quizDescription() {
    return (
      <div className="quiz-game-description">
        <div>
          Meet Toby. Toby is our pet cat.
          We adopted him and his sister Eve from a shelter in SF.
        </div>
        <div>
          The game is all about finding Toby! Please take a look at these photos of Toby.
          When you think you are ready to find him amongst the other "fake Toby's" please click Start!
        </div>
        <br/>
        <Button onClick={this.__gameStartClick.bind(this)}>Start</Button>
      </div>
    )
  }

  __quizGame() {
    const { gameData, currentQuestionNumber, quizStart } = this.state;
    const { options } = gameData;

    const currentOptions = this.shuffleArray(options[currentQuestionNumber]);

    let content;

    if (!quizStart) {
      content = this.__quizDescription();
    }

    return (
      <div className="quiz-game container">
        <div className="quiz-game header">
          <h3>Toby or Not Toby - That is the question!</h3>
          {content}
        </div>
        <br/>
        <div className="answers container" style={{width: "50%"}} hidden={!quizStart}>
          <Table bordered>
            <tbody>
              <tr>
                {currentOptions.map(currentOption => {
                  return this.__quizAnswers(currentOption)
                })}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }

  __quizFinish() {
    const { score } = this.state;
    let person;

    if (score > 0) {
      person = "Tiffany"
    } else {
      person = "Eugene"
    }

    return (
      <div className="quiz-finish container">
        Congratulations. You are a {person}!
      </div>
    )
  }

  render() {
    let content;
    const { gameData, currentQuestionNumber } = this.state;
    const maxQuestions = gameData.options.length;

    if (maxQuestions === currentQuestionNumber) {
      content = this.__quizFinish();
    } else {
      content = this.__quizGame();
    }

    return(
      <div className="quiz-page container">
        {content}
      </div>
    )
  }
}

export default TobyPage
