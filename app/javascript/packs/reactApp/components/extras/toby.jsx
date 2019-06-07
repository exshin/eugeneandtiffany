import React from 'react';
import { Button, Table, Row, Col, Label, FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap'

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
          ['toby6.jpg', 'autumn.jpg'],
          ['toby2.jpg', 'eve_toby.jpg'],
          ['toby13.jpg', 'orangecat4_1.jpg'],
          ['toby8.jpg', 'orangecat2_2.jpg'],
          ['toby10.jpg', 'orangecat2_1.jpg'],
          ['toby.jpg', 'orangecat1_1.jpg'],
          ['toby11.jpg', 'orangecat1_2.jpg'],
          ['toby3.jpg', 'max5.jpg'],
          ['toby5.jpg', 'max1.jpg'],
          ['toby15.jpg', 'max2.jpg'],
          ['toby20.jpg', 'max7.jpg'],
          ['toby9.jpg', 'max8.jpg'],
        ],
        answers: [
          'toby6.jpg',
          'toby2.jpg',
          'toby13.jpg',
          'toby8.jpg',
          'toby10.jpg',
          'toby.jpg',
          'toby11.jpg',
          'toby3.jpg',
          'toby5.jpg',
          'toby15.jpg',
          'toby20.jpg',
          'toby9.jpg',
        ],
      },
      incorrectAnswers: [],
      showLeaderBoard: false,
      highScores: [],
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

    const correctAnswer = answers[currentQuestionNumber];

    if (answer === correctAnswer) {
      this.setState({
        score: score + 1,
      });
    } else {
      let newIncorrectAnswers = incorrectAnswers;
      newIncorrectAnswers.push(currentQuestionNumber);
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
      <div className="quiz-game-description" style={{marginBottom: "80px"}}>
        <div>
          Meet Toby. Toby is our pet cat.
          We adopted him and his sister Eve from a shelter in SF.
        </div>
        <br/>
        <div className="toby-picture">
          <img src={require('./../../assets/images/toby_game/toby_pic.jpg')} style={{width: "100%", height: "150px", width: "150px", border: "1px solid black"}}/>
        </div>
        <div>
          The game is all about finding Toby!
        </div>
        <div>
          When you think you are ready to find him amongst the other "fake Toby's" please click Start!
        </div>
        <br/>
        <Button onClick={this.__gameStartClick.bind(this)}>Start</Button>
        <br/>
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
      <div className="toby-game container">
        <div className="toby-game container">
          <Panel style={{width: "90%", background: "whitesmoke"}}>
            <Panel.Heading style={{background: "lightsalmon"}}>
              <Panel.Title componentClass="h3" style={{textAlign: "center", color: "white", fontSize: "24px"}}>Toby or Not Toby - That is the question!</Panel.Title>
            </Panel.Heading>
            <br/>
            <Panel.Body>
              <div className="answers container" style={{width: "65%"}} hidden={!quizStart}>
                <h5>#{currentQuestionNumber+1} / 12</h5>
                <div>Click on the picture of Toby.</div>
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
              <br/>
              {content}
              <br/>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    )
  }

  __quizFinish() {
    const { score, gameData, incorrectAnswers } = this.state;
    let labelClassName;
    let scoreMessage;
    const totalQuestions = gameData["options"].length;
    const scorePercent = score / (totalQuestions + 0.0);

    if (scorePercent > 0.5) {
      labelClassName = "success";
      if (scorePercent === 1.0) {
        scoreMessage = "Oh my goodness! You've gotten a perfect score! You are a Toby EXPERT!";
      } else {
        scoreMessage = "Congratulations! You can pick out a Toby amongst the crowd!";
      }
    } else {
      labelClassName = "danger";
      if (scorePercent === 0.0) {
        scoreMessage = "Wow. Amazing. You've gotten them all wrong. This is... impressive.";
      } else {
        scoreMessage = "Looks like you're going to need more training! Would you like to spend a weekend with Toby?";
      }
    }

    const scorePercentString = Math.ceil(scorePercent*100);

    let questions = [];

    incorrectAnswers.map(i => {
      let choices = gameData["options"][i];
      let correctChoice = gameData["answers"][i];

      // Remove the correct choice and what's left is the wrong choice
      choices = choices.filter(item => item !== correctChoice);
      const wrongChoice = choices[0];

      questions.push([correctChoice, wrongChoice])
    });

    let incorrectClassName = "incorrect-choices div-center";
    if (scorePercentString === 100) {
      incorrectClassName = "incorrect-choices div-center hidden";
    }

    return (
      <div className="toby-finish container">
        <Panel style={{width: "90%", background: "aliceblue"}}>
          <div className="div-center">
            <br/>
            <div className="toby-score-title" style={{textAlign: "center", marginBottom: "40px"}}>
              <h3>Your Score</h3>
              <hr/>
            </div>

            <div className="toby-score-value" style={{textAlign: "center"}}>
              <Label bsStyle={labelClassName} style={{fontSize: "80px", paddingTop: "0px", paddingBottom: "0px"}}>{scorePercentString}%</Label>
            </div>

            <div className="toby-score-message" style={{textAlign: "center", marginTop: "40px"}}>
              {scoreMessage}
              <hr/>
            </div>

            <div className="submit-toby-score container" style={{width: "80%"}}>
              {this.__submitScore()}
            </div>

            <div className={incorrectClassName}>
              <h4 style={{textAlign: "center"}}>Your Incorrect Answers</h4>
              <div className="div-center">
                <Table className="container" bordered style={{background: "white", width: "25%"}}>
                  <thead>
                  <tr>
                    <th>Correct Answer</th>
                    <th>Your Answer</th>
                  </tr>
                  </thead>
                  <tbody>
                  {questions.map((question, i) => {
                    return this.__incorrectAnswer(question)
                  })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    )
  }

  __incorrectAnswer(question, i) {
    return (
      <tr key={i}>
        <td>
          <div className="correct-answer">
            <img src={require(`./../../assets/images/toby_game/${question[0]}`)}
                 style={{width: "100px", height: "100px", border: "1px solid black"}}
            />
          </div>
        </td>
        <td>
          <div className="incorrect-answer">
            <img src={require(`./../../assets/images/toby_game/${question[1]}`)}
                 style={{width: "100px", height: "100px", border: "1px solid black"}}
            />
          </div>
        </td>
      </tr>
    )
  }

  __submitScore() {
    // allows user to submit their score to a leaderboard (as well as for admin viewing)
    return (
      <div>
        <form style={{width: "80%", float: "left"}}>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Enter your name to submit your score! (and see the leaderboard)</ControlLabel>
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
        <Button style={{float: "left", marginTop: "25px"}} bsStyle="primary" onClick={this.__handleSubmitScore.bind(this)}>Submit</Button>
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
      url: "/toby_game/score",
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

  __leaderBoard() {
    const {highScores} = this.state;

    return (
      <div className="div-center">
        <div>
          <h3 style={{textAlign: "center"}}>Leaderboard</h3>
        </div>
        <div className="div-center" style={{width: "40%"}}>
          <Table className="container" bordered style={{background: "white", width: "50%"}}>
            <thead>
            <tr>
              <th>Placement</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {highScores.map((highScore, index) => {
              return this.__leaderBoardEntries(highScore, index)
            })}
            </tbody>
          </Table>
        </div>

      </div>
    )
  }

  __leaderBoardEntries(entry, index) {
    const {gameData} = this.state;
    const score = Math.ceil(entry.score / (gameData["options"].length + 0.0) * 100);

    return (
      <tr key={index}>
        <td>
          {index + 1}
        </td>
        <td>
          {entry.name}
        </td>
        <td>
          {score}%
        </td>
      </tr>
    )
  }

  render() {
    let content;
    const { gameData, currentQuestionNumber, showLeaderBoard } = this.state;
    const maxQuestions = gameData.options.length;

    if (maxQuestions === currentQuestionNumber) {
      content = this.__quizFinish();
    } else {
      content = this.__quizGame();
    }

    if (showLeaderBoard === true) {
      content = this.__leaderBoard();
    }

    return(
      <div className="quiz-page container">
        {content}
      </div>
    )
  }
}

export default TobyPage
