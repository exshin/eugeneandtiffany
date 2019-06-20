import React from 'react';
import { Button, Table, Row, Col, Label, FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap'

import $ from 'jquery'

/*
Colors Game

Randomly get a primary color tile each turn: blue, yellow, red.
Use that primary color tile to mark a square and the 4 adjacent squares around it.
If any of those squares can make a new advanced color (green, orange, purple) via
  a combination of 2 primary colors, then the square turns into the advanced color.
When 3 or more advanced colors are touching, turn them back into white squares and increase score.

 |---|---|---|---|
 |   |   |   |   |
 |---|---|---|---|
 |   |   |   |   |
 |---|---|---|---|
 |   |   |   |   |
 |---|---|---|---|
 |   |   |   |   |
 |---|---|---|---|


// add this to app.css for cursor images. need to scale image size down though
 div.colors-board
 {
 cursor:url("./../../assets/images/colors/blue.png") 15 15,auto;
 }
//

*/

class ColorsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStart: false,
      turnNumber: 0,
      primaryColors: ['red', 'blue', 'yellow'],
      secondaryColors: ['green', 'purple', 'orange'],
      score: 0.0,
      showLeaderBoard: false,
      highScores: [],
      gameOver: false,
      colorHash: {
        0: "white",
        3: "yellow",
        5: "red",
        9: "blue",
        8: "orange",
        12: "green",
        14: "purple"
      },
      colorReverseHash: {
        "white": 0,
        "yellow": 3,
        "red": 5,
        "blue": 9,
        "orange": 8,
        "green": 12,
        "purple": 14
      },
      rows: [0,1,2,3,4,5],
      cols: [0,1,2,3,4,5],
      board: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
      nextPrimaryColor: "white",
      matchMessage: ""
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
    const {primaryColors} = this.state;

    this.setState({
      gameStart: true,
      nextPrimaryColor: this.shuffleArray(primaryColors)[0]
    });
  }

  __quizDescription() {
    return (
      <div>
        <div>
          Randomly get a primary color tile each turn: blue, yellow, red.
          Use that primary color tile to mark a square and the 4 adjacent squares around it.
          If any of those squares can make a new advanced color (green, orange, purple) via
          a combination of 2 primary colors, then the square turns into the advanced color.
          When 3 or more advanced colors are touching, turn them back into white squares and increase score.
        </div>

        <br/>
        <Button onClick={this.__gameStartClick.bind(this)}>Start</Button>
      </div>
    )
  }

  __tile(i, j) {
    const {colorHash, board, nextPrimaryColor} = this.state;
    let color = colorHash[board[i][j]];

    return (
      <div className="tile">
        <img src={require(`./../../assets/images/colors/${color}.png`)}
             style={{width: "40px", height: "40px"}}
             onClick={this.__tileClick.bind(this, i, j, nextPrimaryColor)}/>
      </div>
    )
  }

  __tileClick(i, j, nextPrimaryColor) {
    const {board, colorReverseHash, colorHash, turnNumber, primaryColors, rows, cols, score} = this.state;

    let newBoard = board;
    let newPrimaryColor = colorReverseHash[nextPrimaryColor];
    const secondaryColors = [8,12,14];
    const primaryColorsInts = [3,5,9];

    const maxRows = Math.max(...rows);
    const maxCols = Math.max(...cols);

    // Can only click on white squares
    if (board[i][j] !== 0) {
      return
    }

    // Spread to adjacent tiles
    if (primaryColorsInts.includes(board[i][j])) {
      let newColor = newBoard[i][j] + newPrimaryColor;
      if (secondaryColors.includes(newColor)) {
        newBoard[i][j] = newColor;
      }
    } else if (board[i][j] === 0) {
      newBoard[i][j] = newPrimaryColor;
    } else {
      return
    }

    // Cross
    if (i > 0) {
      // top side
      const newI = i - 1;
      if (board[newI][j] > 0) {
        let newColor = newBoard[newI][j] + newPrimaryColor;
        if (secondaryColors.includes(newColor)) {
          newBoard[newI][j] = newColor;
        }
      } else {
        newBoard[newI][j] = newPrimaryColor;
      }
    }
    if (j > 0) {
      // left side
      const newJ = j - 1;
      if (board[i][newJ] > 0) {
        let newColor = newBoard[i][newJ] + newPrimaryColor;
        if (secondaryColors.includes(newColor)) {
          newBoard[i][newJ] = newColor;
        }
      } else {
        newBoard[i][newJ] = newPrimaryColor;
      }
    }
    if (i < maxRows) {
      // bottom side
      const newI = i + 1;
      if (board[newI][j] > 0) {
        let newColor = newBoard[newI][j] + newPrimaryColor;
        if (secondaryColors.includes(newColor)) {
          newBoard[newI][j] = newColor;
        }
      } else {
        newBoard[newI][j] = newPrimaryColor;
      }
    }
    if (j < maxCols) {
      // right side
      const newJ = j + 1;
      if (board[i][newJ] > 0) {
        let newColor = newBoard[i][newJ] + newPrimaryColor;
        if (secondaryColors.includes(newColor)) {
          newBoard[i][newJ] = newColor;
        }
      } else {
        newBoard[i][newJ] = newPrimaryColor;
      }
    }

    // Check for matching secondary colors
    let matchingTiles = {8: [], 12: [], 14: []};
    rows.map(i => {
      cols.map(j => {
        matchingTiles = this.__checkMatchingTiles(newBoard, matchingTiles, i, j);
      });
    });

    [8,12,14].map(m => {
      let uniqueMatchingTiles = [];
      $.each(matchingTiles[m], function(i, el){
        if($.inArray(el, uniqueMatchingTiles) === -1) uniqueMatchingTiles.push(el);
      });

      if (uniqueMatchingTiles.length > 2) {

        // Matching tiles turn back to white
        uniqueMatchingTiles.map(tiles => {
          let tile = tiles.split(",");
          const i = parseInt(tile[0]);
          const j = parseInt(tile[1]);
          newBoard[i][j] = 0;
        });

        // Increase score
        this.setState({
          score: score + uniqueMatchingTiles.length
        });

        console.log(`Matched ${colorHash[m]} ${uniqueMatchingTiles.length} tiles!`);
      }
    });

    this.setState({
      board: newBoard,
      turnNumber: turnNumber + 1,
      nextPrimaryColor: this.shuffleArray(primaryColors)[0]
    });

    // Check for game end when there are no more white squares left

  }

  __checkMatchingTiles(board, matchingTiles, i, j) {
    const {rows, cols} = this.state;
    const secondaryColors = [8,12,14];
    const maxRows = Math.max(...rows);
    const maxCols = Math.max(...cols);

    if (secondaryColors.includes(board[i][j])) {
      let secondaryColor = board[i][j];

      if (i !== maxRows) {
        if (board[i + 1][j] === secondaryColor) {
          matchingTiles[secondaryColor].push(`${i},${j}`);
          matchingTiles[secondaryColor].push(`${i+1},${j}`);
          this.__checkMatchingTiles(board, matchingTiles, i + 1, j);
        }
      }
      if (j !== maxCols) {
        if (board[i][j + 1] === secondaryColor) {
          matchingTiles[secondaryColor].push(`${i},${j}`);
          matchingTiles[secondaryColor].push(`${i},${j+1}`);
          this.__checkMatchingTiles(board, matchingTiles, i, j + 1);
        }
      }
    }
    return matchingTiles;
  }

  __colorsGame() {
    const { nextPrimaryColor, score, gameStart, rows, cols, colorHash } = this.state;

    let content;

    if (!gameStart) {
      content = this.__quizDescription();
    }

    let cursorClassName = `colors-board-${nextPrimaryColor}-cross div-center`;

    return (
      <div className="colors container">
        <div className="colors-panel container">
          <Panel style={{width: "90%", background: "whitesmoke"}}>
            <Panel.Heading style={{background: "lightblue"}}>
              <Panel.Title componentClass="h3" style={{textAlign: "center", color: "white", fontSize: "24px"}}>Colors!</Panel.Title>
            </Panel.Heading>
            <br/>
            <Panel.Body>
              <div className="">
                <div className="div-center" style={{width: "45%"}} hidden={!gameStart}>
                  <h4>Next Tile</h4>
                  <div className="next-tile">
                    <div className="tile">
                      <img src={require(`./../../assets/images/colors/${nextPrimaryColor}.png`)}
                           style={{width: "60px", height: "60px"}}
                      />
                    </div>
                  </div>
                  <div className="score">
                    <h3>{score}</h3>
                  </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className={cursorClassName} style={{width: "22%"}} hidden={!gameStart}>
                  {rows.map((row, i) =>
                    <div className="row colors-board-row" key={ i } id={ String(i) }>
                      {cols.map((col, j) =>
                        <div className="col colors-board-col" key={ j } id={ String(j) }>
                          {this.__tile(i, j)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
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

  __gameFinish() {
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
          {index}
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
    const { showLeaderBoard, gameOver } = this.state;

    if (gameOver) {
      content = this.__gameFinish();
    } else {
      content = this.__colorsGame();
    }

    if (showLeaderBoard === true) {
      content = this.__leaderBoard();
    }

    return(
      <div className="colors-page container">
        {content}
      </div>
    )
  }
}

export default ColorsPage
