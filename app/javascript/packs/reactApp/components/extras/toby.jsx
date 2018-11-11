import React from 'react';
import { Button, Table, Row, Col } from 'react-bootstrap'

import $ from 'jquery'

class TobyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizStart: false,
      currentQuestionNumber: 1,
      score: 0.0,
      gameData: {
        questions: {
          1: "How much do you like chocolate?",
          2: "Which music choices below would you put on while cooking dinner?",
          3: "Which would you eat for breakfast?",
          4: "Fill in the blank:'A panda __________. ",
          5: "Which of the following countries would you like to travel to next?",
          6: "Which of the following fruit do you like best?",
          7: "How are you with driving directions?",
          8: "Which of the following activities would you prefer?",
          9: "Which of the following is your favorite cat?",
          10: "How often would you get a haircut?"
        },
        answers: {
          1: {"Drown me in it!": 2, "Yes.": 1, "It's alright. I'll eat it sometimes": -2, "Not one bit": -1},
          2: {"Emo rock music from the 90s": 2, "Happy pop music": 1, "Classical music": -1, "Indie folk music": -2},
          3: {"Anything, I'm so HUNGRY!!": 2, "Eggs, bacon, and biscuits and gravy mmmmm": 1, "Pancakes. but only after 10am.": -1, "Just coffee. I need that caffeine... Gimmeeee it!": -2},
          4: {"eats shoots, and leaves": 1, "eats shoots and leaves": 2, "eats, shoots and leaves": -1, "eats, shoots, and leaves": -2},
          5: {"New Zealand": 1, "Italy": 2, "Taiwan": 0, "Japan": -1},
          6: {"Grapes": 0, "Cherimoya": 2, "White Peach": 0, "Watermelon": -2},
          7: {"Yes.": 1, "Amazing. I can show you the way~": 2, "Eh. I know the general directions": -1, "Like a fish out of water": -2},
          8: {"Reading a book": 1, "Watching your favorite tv show": 0, "Gardening": 0, "Playing video games": -2, "Arts and Crafts!": 2},
          9: {"Toby": -1, "Eve": 1, "Shami": 0, "Autumn": 0, "Mini": 0, "The cat in the hat": 0},
          10: {"Twice a year": 1, "Every 4 years, or just in front of the mirror once in a while": 2, "When the moon is full": -1, "Every 3rd month": -2},
        }

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
    const answerValue = currentAnswer[answer];

    this.setState({
      score: score + answerValue,
      currentQuestionNumber: currentQuestionNumber + 1
    });

    $('.answer-button').map((i, button) => {
      button.blur();
    });
  }

  __quizDescription() {
    return (
      <div className="quiz-description container">
        <h4>The "Are you a Eugene or Tiffany? Who knows? Do you? Let's find out!" Game</h4>
        <div>
          <Button onClick={this.__gameStartClick.bind(this)}>Play</Button>
        </div>
      </div>
    )
  }

  __quizAnswers(currentAnswerChoice) {
    return (
      <tr>
        <td>
          <div className="answer">
            <Button className="answer-button" onClick={this.__answerClick.bind(this, currentAnswerChoice)} block>{currentAnswerChoice}</Button>
          </div>
        </td>
      </tr>
    )
  }

  __quizGame() {
    const { gameData, currentQuestionNumber } = this.state;
    const { questions, answers } = gameData;

    const currentQuestion = questions[currentQuestionNumber];
    const currentAnswerChoices = this.shuffleArray(Object.keys(answers[currentQuestionNumber]));

    return (
      <div className="quiz-game container">
        <div className="questions container" style={{width: "50%", fontSize: "x-large", fontWeight: 500}}>
          {currentQuestion}
        </div>
        <br/>
        <div className="answers container" style={{width: "50%"}}>
          <Table bordered>
            <tbody>
            {currentAnswerChoices.map(currentAnswerChoice => {
              return this.__quizAnswers(currentAnswerChoice)
            })}
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
    const maxQuestions = Object.keys(gameData.questions).length + 1;

    if (!this.state.quizStart) {
      content = this.__quizDescription();
    } else if (maxQuestions === currentQuestionNumber) {
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
