import React from 'react';
import { Button, Table, Row, Col, Label } from 'react-bootstrap'

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
          ['eugene.jpg', 'hbird.jpg'],
          ['toby_2.jpg', 'faketoby2.jpg'],
          ['toby3.jpg', 'faketoby3.jpg'],
        ],
        answers: [
          'eugene.jpg',
          'toby_2.jpg',
          'toby3.jpg'
        ],
        incorrectAnswers: []
      },
      showLeaderBoard: false,
      highScores: {},
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
    const { gameData, currentQuestionNumber, score, incorrectAnswers } = this.state;
    const { answers } = gameData;

    const currentAnswer = answers[currentQuestionNumber];
    const correctAnswer = answers[currentQuestionNumber];

    if (currentAnswer === correctAnswer) {
      this.setState({
        score: score + 1,
      });
    } else {
      let newIncorrectAnswers = incorrectAnswers.push(currentQuestionNumber);
      this.setState({
        incorrectAnswers: newIncorrectAnswers
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
          <Button className="answer-button">
            <img src={require(`./../../assets/images/toby_game/${currentOption}`)}
                 style={{width: "250px", height: "250px", border: "1px solid black"}}
                 onClick={this.__answerClick.bind(this, currentOption)}/>
          </Button>
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
    const { score, gameData } = this.state;
    let labelClassName;
    let labelTitle;
    const totalQuestions = gameData['options'].length;
    const scorePercent = score / (totalQuestions + 0.0);

    if (scorePercent > 0.5) {
      labelClassName = "success";
      if (scorePercent === 1.0) {
        labelTitle = "Oh my goodness! You've gotten a perfect score! You are a Toby EXPERT!";
      } else {
        labelTitle = "Congratulations! You can pick out a Toby amongst the crowd!";
      }
    } else {
      labelClassName = "danger";
      if (scorePercent === 0.0) {
        labelTitle = "Wow. Amazing. You've gotten them all wrong. This is... impressive.";
      } else {
        labelTitle = "Looks like you're going to need more training! Would you like to spend a weekend with Toby?";
      }
    }

    return (
      <div className="quiz-finish container">
        <div className="div-center">
          <br/>
          <div className="score">
            <h3>{labelTitle}</h3>
            <Label bsStyle={labelClassName} style={{fontSize: "60px"}}>{scorePercent*100}%</Label>
          </div>
          <hr/>

          <div className="incorrect-choices">

          </div>

          <div className="submit-score">
            {this.__submitScore()}
          </div>
        </div>
      </div>
    )
  }

  __submitScore() {
    // allows user to submit their score to a leaderboard (as well as for admin viewing)
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Enter your name to submit your score!</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              onChange={this.__handleTextChange.bind(this)}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  this.__handleSubmitScore();
                }
              }}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        <Button bsStyle="primary" onClick={this.__handleSubmitScore.bind(this)}>Submit</Button>
      </div>
    )
  }

  __handleSubmitScore() {
    const { submitName, score } = this.state;
    const params = {
      name: submitName,
      score: score,
    };
    this.__submit(params);
  }

  __handleTextChange(e) {
    this.setState({ submitName: e.target.value });
  }

  __submit(params) {
    $.ajax({
      type: "POST",
      url: "/quiz/score",
      data: params,
      complete: this.__handleSuccess.bind(this)
    });
  }

  __handleSuccess(result) {
    this.__fetchHighScores();
    this.setState({
      showLeaderBoard: true
    });
  }

  __fetchHighScores() {
    $.ajax({
      type: "GET",
      url: "/toby_game/high_scores",
      data: {},
      dataType: "json",
      complete: this.__handleHighScoreSuccess.bind(this)
    });
  }

  __handleHighScoreSuccess(result) {
    if (result && result.responseJSON) {
      this.setState({
        highScores: result.responseJSON.high_scores
      })
    }
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
