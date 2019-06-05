import React from 'react';
import { Button, Table, Row, Col, Panel, Glyphicon, ProgressBar, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import $ from 'jquery'

class QuizPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizStart: true,
      currentQuestionNumber: 1,
      score: 0.0,
      tiffanyScore: 0.0,
      eugeneScore: 0.0,
      userTiffanyAnswers: [],
      userEugeneAnswers: [],
      submitName: "",
      showLeaderBoard: false,
      tiffanyHighScores: [],
      eugeneHighScores: [],
      gameData: {
        questions: {
          1: "How much do you like chocolate?",
          2: "Which music choices below would you put on while cooking dinner?",
          3: "Which would you eat for breakfast?",
          4: "Fill in the blank:'A panda __________. ",
          5: "Which of the following countries would you travel to next?",
          6: "Which of the following kinds of fruit do you like best?",
          7: "How are you with driving directions?",
          8: "Which of the following activities would you prefer?",
          9: "While traveling, which of the following categories is most important to you? - Nature, Food, or Culture",
          10: "How much sunblock would you wear on a normal sunny day?"
        },
        answers: { // scoring is [Tiffany, Eugene]
          1: {"Drown me in it!": [2, 0], "Yes.": [1, 0], "It's alright. I'll eat it sometimes": [0, 2], "Not one bit": [0, 1]},
          2: {"Pop music": [1, 0], "Other": [0, 0], "Indie folk music": [1, 2], "None. I cook in silence.": [0, 1], "EDM": [0, 1]},
          3: {"Anything, I'm so HUNGRY!!": [2, 0], "Eggs, bacon, and biscuits and gravy mmmmm": [1, 0], "Pancakes. but only after 10am.": [0, 1], "Just coffee. I need that caffeine... Gimmeeee it!": [0, 2], "None of these": [0, 0]},
          4: {"eats shoots and leaves": [2, 0],  "eats, shoots, and leaves": [0, 2]},
          5: {"New Zealand": [1, 0], "Italy": [2, 1], "Taiwan": [2, 1], "Japan": [1, 2]},
          6: {"Grapes?": [2, 1], "Tropical Fruits (E.g. Cherimoya, Lychee)": [2, 0], "Stone Fruit (Peaches, Nectarines, etc..)": [2, 1], "Melons": [0, 2], "None of these.": [0, 0]},
          7: {"Yes.": [1, 1], "Amazing. I can show you the way~": [2, 0], "Eh. I know the general directions": [0, 2], "Like a fish out of water": [0, 2]},
          8: {"Reading a book": [1, 0], "Watching your favorite TV shows": [1, 2], "Playing video games": [0, 2], "Arts and Crafts!": [2, 0], "Sports": [0, 1]},
          9: {"Food": [1, 2], "Nature": [1, 0], "Culture": [2, 1]},
          10: {"Just a fine layer": [1, 1], "None. Sunblock feels gross on my skin.": [0, 2], "Ahh cover everything!!": [2, 0]},
        },
        categories: {
          1: "Chocolate",
          2: "Music",
          3: "Breakfast",
          4: "Grammar",
          5: "Travel",
          6: "Fruit",
          7: "Sense of direction",
          8: "Activities",
          9: "Travel",
          10: "Sunblock"
        }

      }
    };
  }

  componentDidMount() {
    // Pull game
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
    $('.answer-button').map((i, button) => {
      button.blur();
    });

    const {
      gameData,
      currentQuestionNumber,
      tiffanyScore,
      eugeneScore,
      userTiffanyAnswers,
      userEugeneAnswers
    } = this.state;
    const { answers, categories } = gameData;

    const currentAnswer = answers[currentQuestionNumber];
    const answerValue = currentAnswer[answer];
    const category = categories[currentQuestionNumber];

    this.setState({
      tiffanyScore: tiffanyScore + answerValue[0],
      eugeneScore: eugeneScore + answerValue[1],
      currentQuestionNumber: currentQuestionNumber + 1
    });

    if (answerValue[0] > 0 && !userTiffanyAnswers.includes(category)) {
      userTiffanyAnswers.push(category);
      this.setState({
        userTiffanyAnswers: userTiffanyAnswers
      });
    }

    if (answerValue[1] > 0 && !userEugeneAnswers.includes(category)) {
      userEugeneAnswers.push(category);
      this.setState({
        userEugeneAnswers: userEugeneAnswers
      });
    }
  }

  __quizDescription() {
    return (
      <div className="quiz-description container">
        <h4>The "Are you a Eugene or a Tiffany? Who knows? Do you? Let's find out!" Game</h4>
        <div>
          <Button onClick={this.__gameStartClick.bind(this)}>Play</Button>
        </div>
      </div>
    )
  }

  __quizAnswers(currentAnswerChoice, index) {
    return (
      <tr key={index}>
        <td>
          <div className="answer">
            <Button className="answer-button" onClick={this.__answerClick.bind(this, currentAnswerChoice)} block>{currentAnswerChoice}</Button>
          </div>
        </td>
      </tr>
    )
  }

  __questions(currentQuestion, currentAnswerChoices, currentQuestionNumber) {
    return (
      <div>
        <div className="questions container" style={{width: "80%", fontSize: "18px", fontWeight: 500, textAlign: "center"}}>
          {currentQuestionNumber}. {currentQuestion}
        </div>
        <br/>
        <div className="answers container" style={{width: "80%"}}>
          <Table bordered>
            <tbody>
            {currentAnswerChoices.map((currentAnswerChoice, index) => {
              return this.__quizAnswers(currentAnswerChoice, index)
            })}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }

  __quizGame() {
    const { gameData, currentQuestionNumber } = this.state;
    const { questions, answers } = gameData;

    const maxQuestions = Object.keys(gameData.questions).length + 1;

    let content;

    if (maxQuestions === currentQuestionNumber) {
      content = this.__quizFinish();
    } else {
      const currentQuestion = questions[currentQuestionNumber];
      const currentAnswerChoices = this.shuffleArray(Object.keys(answers[currentQuestionNumber]));
      content = this.__questions(currentQuestion, currentAnswerChoices, currentQuestionNumber);
    }

    return (
      <div className="quiz-game container">
        <Panel style={{width: "90%", background: "aliceblue"}}>
          <Panel.Heading style={{background: "lightsteelblue"}}>
            <Panel.Title componentClass="h3" style={{textAlign: "center", color: "white", fontSize: "24px"}}>The "Are you a Eugene or Tiffany? Who knows? Do you? Let's find out!" Game</Panel.Title>
          </Panel.Heading>
          <br/>
          <Panel.Body>
            <div>
              {this.__progress()}
            </div>
            <br/>
            {content}
            <br/>
          </Panel.Body>
        </Panel>
      </div>
    )
  }

  __progress() {
    const {tiffanyScore, eugeneScore, quizFinished, gameData, currentQuestionNumber} = this.state;

    const maxQuestions = Object.keys(gameData.questions).length + 1;

    let leftScorePercent = eugeneScore * 5.0;
    let rightScorePercent = tiffanyScore * 5.0;
    //let eugeneHeight = Object(30 + (eugeneScore * 5.0)).toString() + "px";
    //let tiffanyHeight = Object(30 + (tiffanyScore * 5.0)).toString() + "px";

    let eugeneHeight = "50px";
    let tiffanyHeight = "50px";

    return (
      <div className="container" style={{textAlign: "center"}}>
        <div className="container" style={{float: "left", width: "10%", padding: "0px"}}>
          <img src={require('./../../assets/images/eugene_vs_headshot.jpg')} height={eugeneHeight}/>
        </div>
        <div className="container" style={{float: "left", width: "30%", padding: "0px"}}>
          <ProgressBar active={true} bsStyle="warning" className="right" now={leftScorePercent}/>
        </div>
        <div className="container" style={{float: "left", width: "5%", padding: "0px"}}>
          <Glyphicon glyph="star" />
        </div>
        <div className="container" style={{float: "left", width: "30%", padding: "0px"}}>
          <ProgressBar active={true} now={rightScorePercent} />
        </div>
        <div className="container" style={{float: "left", width: "10%", padding: "0px"}}>
          <img src={require('./../../assets/images/tiffany_vs_headshot.jpg')} height={tiffanyHeight}/>
        </div>
      </div>
    )
  }

  __commonCategories(category, index) {
    return (
      <li key={index}>
        {category}
      </li>
    )
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

  __handleSubmitScore() {
    const { submitName, tiffanyScore, eugeneScore, userTiffanyAnswers, userEugeneAnswers } = this.state;
    const params = {
      name: submitName,
      tiffany_score: tiffanyScore,
      eugene_score: eugeneScore,
      user_tiffany_answers: userTiffanyAnswers,
      user_eugene_answers: userEugeneAnswers,
    };
    this.__submit(params);
  }

  __handleTextChange(e) {
    this.setState({ submitName: e.target.value });
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

  __quizFinish() {
    const { tiffanyScore, eugeneScore, userTiffanyAnswers, userEugeneAnswers } = this.state;
    let message;
    let imageUrl;
    let commonCategories = [];

    if (tiffanyScore > eugeneScore) {
      message = "Congratulations! You are a 'Tiffany'!";
      imageUrl = "tiffany_win";
      commonCategories = userTiffanyAnswers;
    } else if (tiffanyScore == eugeneScore) {
      message = "Wow! You are equal parts Eugene and Tiffany! ";
      imageUrl = "tie_win";
      commonCategories = userTiffanyAnswers.concat(userEugeneAnswers);
    } else {
      message = "Congratulations! You are a 'Eugene'!";
      imageUrl = "eugene_win";
      commonCategories = userEugeneAnswers;
    }

    const uniqueCommonCategories = [...new Set(commonCategories)];

    return (
      <div className="quiz-finish container">
        <div className="container" style={{float: "left", width: "40%"}}>
          <div>
            <h3>{message}</h3>
          </div>
          <div>
            <img src={require(`./../../assets/images/${imageUrl}.jpg`)} height="250px"/>
          </div>
        </div>
        <div className="container" style={{float: "left", width: "40%"}}>
          <div>
            Things you have in common:
          </div>
          <div>
            {uniqueCommonCategories.map((category, index) => {
              return this.__commonCategories(category, index)
            })}
          </div>
        </div>
        <br/>
        <div className="container"  style={{float: "left", width: "30%"}}>
          {this.__submitScore()}
        </div>
      </div>
    )
  }

  __leaderBoard() {
    const {tiffanyHighScores, eugeneHighScores} = this.state;

    return (
      <div className="container">

        <div>
          <h3>Leaderboard</h3>
        </div>

        <div className="container">
          <div className="container" style={{float: "left", width: "40%"}}>
            <h4>Top 10 "You Are A Tiffany" Scores</h4>
            <Table bordered style={{background: "white"}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
              {tiffanyHighScores.map((highScore, index) => {
                return this.__leaderBoardEntries(highScore, "tiffany", index)
              })}
              </tbody>
            </Table>
          </div>

          <div className="container" style={{float: "left", width: "40%"}}>
            <h4>Top 10 "You Are A Eugene" Scores</h4>
            <Table bordered style={{background: "white"}}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
              </thead>
              <tbody>
              {eugeneHighScores.map((highScore, index) => {
                return this.__leaderBoardEntries(highScore, "eugene", index)
              })}
              </tbody>
            </Table>
          </div>
        </div>

      </div>
    )
  }

  __leaderBoardEntries(entry, leader, index) {
    const score = leader === "tiffany" ? entry.tiffany_score : entry.eugene_score;

    return (
      <tr key={index}>
        <td>
          {entry.name}
        </td>
        <td>
          {score * 5}%
        </td>
      </tr>
    )
  }

  __fetchHighScores() {
    $.ajax({
      type: "GET",
      url: "/quiz/high_scores",
      data: {},
      dataType: "json",
      complete: this.__handleHighScoreSuccess.bind(this)
    });
  }

  __handleHighScoreSuccess(result) {
    if (result && result.responseJSON) {
      this.setState({
        tiffanyHighScores: result.responseJSON.tiffany_scores,
        eugeneHighScores: result.responseJSON.eugene_scores
      })
    }
  }

  render() {
    const {showLeaderBoard} = this.state;

    let content;
    switch (showLeaderBoard) {
      case true:
        content = this.__leaderBoard();
        break;
      case false:
        content = this.__quizGame();
        break;
      default:
        break;
    }

    return(
      <div className="quiz-page container">
        {content}
      </div>
    )
  }
}

export default QuizPage
