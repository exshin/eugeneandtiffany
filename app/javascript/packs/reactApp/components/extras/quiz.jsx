import React from 'react';
import { Button, Table, Row, Col, Panel, Glyphicon, ProgressBar } from 'react-bootstrap'

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
          9: "Choose your favorite cat from the list...",
          10: "How often would you get a haircut?"
        },
        answers: {
          1: {"Drown me in it!": 2, "Yes.": 1, "It's alright. I'll eat it sometimes": -2, "Not one bit": -1},
          2: {"Emo rock music from the 90s": 2, "Happy pop music": 1, "Classical music": -1, "Indie folk music": -2},
          3: {"Anything, I'm so HUNGRY!!": 2, "Eggs, bacon, and biscuits and gravy mmmmm": 1, "Pancakes. but only after 10am.": -1, "Just coffee. I need that caffeine... Gimmeeee it!": -2},
          4: {"eats shoots, and leaves": 1, "eats shoots and leaves": 2, "eats, shoots and leaves": -1, "eats, shoots, and leaves": -2},
          5: {"New Zealand": 1, "Italy": 2, "Taiwan": 0, "Japan": -1},
          6: {"Grapes?": -1, "Exotic Fruits from Southeast Asia (E.g. Cherimoya)": 2, "Stone Fruit (Peaches, Nectarines, etc..)": 1, "Melons": -2},
          7: {"Yes.": 1, "Amazing. I can show you the way~": 2, "Eh. I know the general directions": -1, "Like a fish out of water": -2},
          8: {"Reading a book": 1, "Watching your favorite tv show": 0, "Gardening": 0, "Playing video games": -2, "Arts and Crafts!": 2, "Sports": -1},
          9: {"Toby": -1, "Eve": 1, "Shami": 0, "Autumn": 0, "Mini": 0, "The cat in the hat": 0},
          10: {"Twice a year": 1, "Every 4 years, or just in front of the mirror once in a while": 2, "When the moon is full": -1, "Every 3rd month": -2},
        },
        categories: {
          1: "chocolate",
          2: "music",
          3: "breakfast",
          4: "grammar",
          5: "travel",
          6: "fruit",
          7: "sense of direction",
          8: "activities",
          9: "cat",
          10: "hair"
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
    const {
      gameData,
      currentQuestionNumber,
      tiffanyScore,
      eugeneScore,
      userTiffanyAnswers,
      userEugeneAnswers
    } = this.state;
    const { answers } = gameData;

    const currentAnswer = answers[currentQuestionNumber];
    const answerValue = currentAnswer[answer];

    if (answerValue > 0.0) {
      this.setState({
        tiffanyScore: tiffanyScore + answerValue,
        currentQuestionNumber: currentQuestionNumber + 1,
        userTiffanyAnswers: userTiffanyAnswers.push()
      });
    } else {
      this.setState({
        eugeneScore: eugeneScore + answerValue,
        currentQuestionNumber: currentQuestionNumber + 1,
        userEugeneAnswers: userEugeneAnswers
      });
    }

    $('.answer-button').map((i, button) => {
      button.blur();
    });
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

  __questions(currentQuestion, currentAnswerChoices) {
    return (
      <div>
        <div className="questions container" style={{width: "80%", fontSize: "large", fontWeight: 500, textAlign: "center"}}>
          {currentQuestion}
        </div>
        <br/>
        <div className="answers container" style={{width: "80%"}}>
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
      content = this.__questions(currentQuestion, currentAnswerChoices);
    }

    return (
      <div className="quiz-game container">
        <Panel style={{width: "90%", background: "aliceblue"}}>
          <Panel.Heading style={{background: "lightsteelblue"}}>
            <Panel.Title componentClass="h3" style={{textAlign: "center"}}>The "Are you a Eugene or Tiffany? Who knows? Do you? Let's find out!" Game</Panel.Title>
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
    const {tiffanyScore, eugeneScore} = this.state;
    let leftScorePercent = eugeneScore * -6.0;
    let rightScorePercent = tiffanyScore * 6.0;

    return (
      <div className="container" style={{textAlign: "center"}}>
        <div className="container" style={{float: "left", width: "10%", padding: "0px"}}>
          <img src={require('./../../assets/images/eugene_vs_headshot.jpg')} height="50px"/>
        </div>
        <div className="container" style={{float: "left", width: "30%", padding: "0px"}}>
          <ProgressBar bsStyle="warning" className="right" now={leftScorePercent}/>
        </div>
        <div className="container" style={{float: "left", width: "5%", padding: "0px"}}>
          <Glyphicon glyph="star" />
        </div>
        <div className="container" style={{float: "left", width: "30%", padding: "0px"}}>
          <ProgressBar now={rightScorePercent} />
        </div>
        <div className="container" style={{float: "left", width: "10%", padding: "0px"}}>
          <img src={require('./../../assets/images/tiffany_vs_headshot.jpg')} height="50px"/>
        </div>
      </div>
    )
  }

  __quizFinish() {
    const { tiffanyScore, eugeneScore } = this.state;
    let message;
    let imageUrl;

    if (tiffanyScore > (eugeneScore * -1)) {
      message = "Congratulations! You are a 'Tiffany'!";
      imageUrl = "tiffany_win";
    } else if (tiffanyScore == (eugeneScore * -1)) {
      message = "Wow! You are equal parts Eugene and Tiffany! ";
      imageUrl = "equal_win"
    } else {
      message = "Congratulations! You are a 'Eugene'!";
      imageUrl = "eugene_win";
    }

    return (
      <div className="quiz-finish container">
        <div>
          {message}
        </div>
        <div>
          <img src={require(`./../../assets/images/${imageUrl}.jpg`)} height="400px"/>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div className="quiz-page container">
        {this.__quizGame()}
      </div>
    )
  }
}

export default QuizPage
