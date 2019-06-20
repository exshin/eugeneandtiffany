import React from 'react';
import { Button, Table, Row, Col, Label, FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap'

import $ from 'jquery'

import Block from './blocks/block.jsx'

/*
Blocks Game


*/


class BlocksPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameStart: false,
      turnNumber: 0,
      screenWidth: "",
      score: 0.0,
      score_message: "",
      showLeaderBoard: false,
      highScores: [],
      gameOver: false,
      rows: [0,1,2,3,4,5],
      cols: [0,1,2,3,4,5],
      board: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
      nextBlock: "white",
      currentBlock: "red_single",
      matchMessage: "",
      blockOptions: [
        "red_single",
        "blue_cross",
        "blue_ladder_right",
        "blue_long_vertical",
        "blue_short_flat",
        "green_corner_right",
        "green_diagnal_right",
        "green_half_cross",
        "green_down_t",
        "orange_ladder_right",
        "orange_half_t",
        "orange_vertical",
        "red_corner_right",
        "red_long_flat",
        "red_x",
        "yellow_diagnal_left",
        "yellow_half_cross",
        "yellow_square",
      ],
      colorHash: {
        0: "white",
        1: "yellow",
        2: "red",
        3: "blue",
        4: "orange",
        5: "green",
        6: "purple"
      },
      reverseColorHash: {
        "white": 0,
        "yellow": 1,
        "red": 2,
        "blue": 3,
        "orange": 4,
        "green": 5,
        "purple": 6
      },
      blockHash: {
        "red_single": {"expand": [], "value": 1, "color": "red"},
        "blue_cross": {"expand": ["up", "down", "left", "right"], "value": 8, "color": "blue"},
        "blue_ladder_right": {"expand": ["upright", "downleft"], "value": 3, "color": "blue"},
        "blue_long_vertical": {"expand": ["up", "down"], "value": 3, "color": "blue"},
        "blue_short_flat": {"expand": ["right"], "value": 2, "color": "blue"},
        "green_corner_right": {"expand": ["right", "downright"], "value": 3, "color": "green"},
        "green_diagnal_right": {"expand": ["downright"], "value": 2, "color": "green"},
        "green_half_cross": {"expand": ["downleft", "downright"], "value": 3, "color": "green"},
        "green_down_t": {"expand": ["left", "right", "down"], "value": 3, "color": "green"},
        "orange_ladder_right": {"expand": ["upleft", "downright"], "value": 3, "color": "orange"},
        "orange_half_t": {"expand": ["up", "left", "right"], "value": 4, "color": "orange"},
        "orange_vertical": {"expand": ["up"], "value": 2, "color": "orange"},
        "red_corner_right": {"expand": ["down", "right"], "value": 3, "color": "red"},
        "red_long_flat": {"expand": ["left", "right"], "value": 3, "color": "red"},
        "red_x": {"expand": ["upleft", "upright", "downleft", "downright"], "value": 10, "color": "red"},
        "yellow_diagnal_left": {"expand": ["downleft"], "value": 2, "color": "yellow"},
        "yellow_half_cross": {"expand": ["upright", "downright"], "value": 3, "color": "yellow"},
        "yellow_square": {"expand": ["up", "left", "upleft"], "value": 4, "color": "yellow"}
      }
    };
  }

  componentDidMount() {
    this.setState({
      screenWidth: window.innerWidth
    })
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

  randomOption(array) {
    const length = array.length;
    const randomElementIndex = Math.floor(Math.random() * (length + 1));
    return array[randomElementIndex] || array[0]
  }

  __gameStartClick() {
    const {blockOptions} = this.state;
    const nextBlock = this.randomOption(blockOptions);
    const currentBlock = this.randomOption(blockOptions);

    this.setState({
      gameStart: true,
      nextBlock: nextBlock,
      currentBlock: currentBlock
    });
  }

  __gameDescription() {
    return (
      <div>
        <div>
          Put down blocks to fill white squares. When a row or column is full, it will disappear!
        </div>
        <div>
          You'll get points every time you place a block and extra points when you fill a column or row.
        </div>
        <div>
          The game ends when you can no longer put any more block down.
        </div>

        <br/>
        <Button onClick={this.__gameStartClick.bind(this)}>Start</Button>
      </div>
    )
  }

  __replay() {
    const {blockOptions} = this.state;
    const nextBlock = this.randomOption(blockOptions);
    const currentBlock = this.randomOption(blockOptions);

    this.setState({
      gameStart: true,
      turnNumber: 0,
      screenWidth: window.innerWidth,
      score: 0.0,
      score_message: "",
      showLeaderBoard: false,
      gameOver: false,
      rows: [0,1,2,3,4,5],
      cols: [0,1,2,3,4,5],
      board: [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],
      nextBlock: nextBlock,
      currentBlock: currentBlock,
      matchMessage: ""
    });
  }

  __validMove(expand, board, i, j) {
    const {rows, cols} = this.state;
    const maxRows = Math.max(...rows);
    const maxCols = Math.max(...cols);

    let validMove = true;

    for (let direction of expand) {

      let directionColorValue;
      switch (direction) {
        case "up":
          if (i-1 < 0) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i-1][j];
            break;
          }
        case "down":
          if (i+1 > maxRows) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i+1][j];
            break;
          }
        case "left":
          if (j-1 < 0) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i][j-1];
            break;
          }
        case "right":
          if (j+1 > maxCols) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i][j+1];
            break;
          }
        case "upleft":
          if (i-1 < 0 || j-1 < 0) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i-1][j-1];
            break;
          }
        case "upright":
          if (i-1 < 0 || j+1 > maxCols) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i-1][j+1];
            break;
          }
        case "downleft":
          if (i+1 > maxRows || j-1 < 0) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i+1][j-1];
            break;
          }
        case "downright":
          if (i+1 > maxRows || j+1 > maxCols) {
            validMove = false;
            break
          } else {
            directionColorValue = board[i+1][j+1];
            break;
          }
        default:
          break;
      }

      if (directionColorValue !== 0) {
        validMove = false;
      }

      if (validMove === false) {
        break
      }
    }

    return validMove
  }

  __board() {
    const { currentBlock, gameStart, rows, cols, gameOver, screenWidth } = this.state;

    let cursorClassName;
    let panelBackgroundColor = "white";
    if (gameOver === true) {
      panelBackgroundColor = "lightslategrey";
    }

    let width = "50%";
    if (screenWidth < 1200) {
      width = "300px";
    }

    cursorClassName = `div-center colors-board-${currentBlock}`;

    return (
      <div>
        <Panel style={{background: panelBackgroundColor, boxShadow: "lightgrey 5px 1px 7px", padding: "5%", width: width}} hidden={!gameStart}>
          <Panel.Body className="" style={{fontSize: "26px", fontStyle: "italic"}}>
            <div className={cursorClassName} style={{}}>
              {rows.map((row, i) =>
                <div className="row blocks-board-row" key={ i } id={ String(i) }>
                  {cols.map((col, j) =>
                    <div className="col blocks-board-col" key={ j } id={ String(j) }>
                      {this.__tile(i, j)}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }

  __tile(i, j) {
    const {board, colorHash} = this.state;
    let color = colorHash[board[i][j]];

    return (
      <div className="tile">
        <img src={require(`./../../assets/images/colors/${color}.png`)}
             style={{width: "40px", height: "40px"}}
             onClick={this.__tileClick.bind(this, i, j)}/>
      </div>
    )
  }

  __tileClick(i, j) {
    const {board, blockHash, currentBlock, reverseColorHash, turnNumber, blockOptions, nextBlock, rows, cols, score} = this.state;

    let newBoard = board;

    const maxRows = Math.max(...rows);
    const maxCols = Math.max(...cols);

    const blockData = blockHash[currentBlock];
    const expand = blockData["expand"];
    const value = blockData["value"];
    const color = blockData["color"];
    const colorValue = reverseColorHash[color];

    let newScore = score;

    // Check to ensure the move is valid (only white spaces)
    if (board[i][j] !== 0) {
      return
    }

    const validMove = this.__validMove(expand, board, i, j);

    if (!validMove) {
      return
    }

    // Now fill the board
    newBoard[i][j] = colorValue;
    expand.map(direction => {
      switch (direction) {
        case "up":
          if (i-1 < 0) {
            break
          } else {
            newBoard[i-1][j] = colorValue;
            break;
          }
        case "down":
          if (i+1 > maxRows) {
            break
          } else {
            newBoard[i+1][j] = colorValue;
            break;
          }
        case "left":
          if (j-1 < 0) {
            break
          } else {
            newBoard[i][j-1] = colorValue;
            break;
          }
        case "right":
          if (j+1 > maxCols) {
            break
          } else {
            newBoard[i][j+1] = colorValue;
            break;
          }
        case "upleft":
          if (i-1 < 0 || j-1 < 0) {
            break
          } else {
            newBoard[i-1][j-1] = colorValue;
            break;
          }
        case "upright":
          if (i-1 < 0 || j+1 > maxCols) {
            break
          } else {
            newBoard[i-1][j+1] = colorValue;
            break;
          }
        case "downleft":
          if (i+1 > maxRows || j-1 < 0) {
            break
          } else {
            newBoard[i+1][j-1] = colorValue;
            break;
          }
        case "downright":
          if (i+1 > maxRows || j+1 > maxCols) {
            break
          } else {
            newBoard[i+1][j+1] = colorValue;
            break;
          }
        default:
          break;
      }
    });

    const blockScore = Math.floor(value * 1.5);
    newScore += blockScore;
    this.setState({
      board: newBoard,
      score: newScore,
      score_message: ` + ${blockScore}`
    });

    setTimeout(() => {
      this.setState({
        score_message: ""
      });
    }, 2000);

    // Check for full col or rows
    let fullRows = [];
    let colArr = [[],[],[],[],[],[]];
    rows.map(i => {
      if (!newBoard[i].includes(0)) {
        fullRows.push(i);
      }

      cols.map(j => {
        colArr[j].push(newBoard[i][j])
      });
    });

    let fullCols = [];
    cols.map(j => {
      if (!colArr[j].includes(0)) {
        fullCols.push(j);
      }
    });

    if (fullRows.length > 0 || fullCols.length > 0) {
      fullRows.map(row => {
        cols.map(col => {
          newBoard[row][col] = 0;
        });
      });

      fullCols.map(col => {
        rows.map(row => {
          newBoard[row][col] = 0;
        });
      });

      const filledScore = ((fullRows.length ** 2) * 45) + ((fullCols.length ** 2) * 45);
      newScore += filledScore;

      this.setState({
        score: newScore,
        score_message: ` + ${filledScore}`
      });

      setTimeout(() => {
        this.setState({
          score_message: ""
        });
      }, 3000);

      this.setState({
        board: newBoard,
      });
    }

    // Check for game end when there are no more white squares left
    // Get all valid moves for each white spaces left
    // > [11,12,25,42]
    const nextBlockData = blockHash[nextBlock];
    const nextBlockExpand = nextBlockData["expand"];
    let validMoves = [];
    rows.map(row => {
      cols.map(col => {
        if (newBoard[row][col] === 0) {
          const validMove = this.__validMove(nextBlockExpand, newBoard, row, col);
          if (validMove === true) {
            validMoves.push(`${row}${col}`)
          }
        }
      });
    });

    if (validMoves.length === 0) {
      this.setState({
        gameOver: true,
      });
      console.log('Game Over!')
    }

    this.setState({
      turnNumber: turnNumber + 1,
      nextBlock: this.randomOption(blockOptions),
      currentBlock: nextBlock
    });
  }

  __score() {
    const {score, score_message} = this.state;

    return (
      <div className="score" style={{}}>
        <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div style={{fontSize: "20px"}}>
                      Score: {score}
                    </div>
                  </td>
                  <td style={{paddingLeft: "8px"}}>
                    <div style={{fontSize: "12px"}}>
                      {score_message}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Panel.Body>
        </Panel>
      </div>
    )
  }

  __blocksGame() {
    const { nextBlock, screenWidth, gameStart, gameOver } = this.state;

    let content;
    let gameFinishContent;

    if (!gameStart) {
      content = this.__gameDescription();
    }

    if (gameOver) {
      gameFinishContent = this.__gameFinish();
    }

    if (screenWidth > 1200) {
      return (
        <div className="blocks container">
          <div className="blocks-panel container">
            <Panel style={{width: "90%", background: "whitesmoke"}}>
              <Panel.Heading style={{background: "lightblue"}}>
                <Panel.Title componentClass="h3" style={{textAlign: "center", color: "white", fontSize: "24px"}}>Blocks!</Panel.Title>
              </Panel.Heading>
              <br/>
              <Panel.Body>
                <div className="">
                  <div className="message" hidden={!gameOver} style={{paddingLeft: "29%"}}>
                    <Label style={{fontSize: "20px"}}>No more possible moves. Game Over!</Label>
                  </div>
                  <div className="" style={{width: "80%%"}} hidden={!gameStart}>
                    <table>
                      <tbody>
                      <tr>
                        <td style={{paddingLeft: "100px"}}>
                          {this.__score()}
                          <div className="next-block" style={{width: "170px", height: "170px"}}>
                            <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
                              <Panel.Body className="" style={{fontSize: "26px", fontStyle: "italic"}}>
                                <h4>Next Block</h4>
                                <div className="tile-next-block">
                                  <img src={require(`./../../assets/images/colors/${nextBlock}.png`)}/>
                                </div>
                              </Panel.Body>
                            </Panel>
                          </div>
                        </td>
                        <td style={{width: "100%", paddingLeft: "5%", paddingRight: "5%"}}>
                          {this.__board()}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
                <br/>
                {content}
                <br/>
                {gameFinishContent}
              </Panel.Body>
            </Panel>
          </div>
        </div>
      )
    } else {
      return (
        <div className="blocks container">
          <div className="blocks-panel container">
            <Panel style={{width: "100%", background: "whitesmoke"}}>
              <Panel.Heading style={{background: "lightblue"}}>
                <Panel.Title componentClass="h3" style={{textAlign: "center", color: "white", fontSize: "24px"}}>Blocks!</Panel.Title>
              </Panel.Heading>
              <br/>
              <Panel.Body>
                <div className="">
                  <div className="message" hidden={!gameOver} style={{paddingLeft: "5%"}}>
                    <Label style={{fontSize: "14px"}}>No more possible moves. Game Over!</Label>
                  </div>
                  <div className="" style={{width: "100%"}} hidden={!gameStart}>
                    <table style={{width: "100%"}}>
                      <tbody>
                        <tr>
                          <td style={{width: "100%"}}>
                            {this.__score()}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="next-block" style={{width: "170px", height: "170px"}}>
                              <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
                                <Panel.Body className="" style={{fontSize: "26px", fontStyle: "italic"}}>
                                  <h4>Next Block</h4>
                                  <div className="tile-next-block">
                                    <img src={require(`./../../assets/images/colors/${nextBlock}.png`)}/>
                                  </div>
                                </Panel.Body>
                              </Panel>
                            </div>
                          </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                          <td style={{width: "100%", paddingLeft: "5%", paddingRight: "5%"}}>
                            {this.__board()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
                <br/>
                {content}
                <br/>
                {gameFinishContent}
              </Panel.Body>
            </Panel>
          </div>
        </div>
      )
    }
  }

  __gameFinish() {
    const { score } = this.state;
    let labelClassName;

    return (
      <div className="blocks-finish">
        <Panel style={{background: "white"}}>
          <div className="div-center container">
            <div className="submit-blocks-score" style={{width: "80%", padding: "20px"}}>
              {this.__submitScore()}
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
        <form style={{width: "50%", float: "left"}}>
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
        <div style={{float: "left", marginTop: "30px", marginRight: "20px", marginLeft: "20px"}}> OR </div>
        <Button style={{float: "left", marginTop: "25px"}} onClick={this.__replay.bind(this)}>Replay</Button>
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
      url: "/blocks/score",
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
      url: "/blocks/high_scores",
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
          <h3 style={{textAlign: "center"}}>Top 10 Leaderboard</h3>
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
              return this.__leaderBoardEntries(highScore, index+1)
            })}
            </tbody>
          </Table>
        </div>

      </div>
    )
  }

  __leaderBoardEntries(entry, index) {
    return (
      <tr key={index}>
        <td>
          {index}
        </td>
        <td>
          {entry.name}
        </td>
        <td>
          {entry.score}
        </td>
      </tr>
    )
  }

  render() {
    let content;
    const { showLeaderBoard } = this.state;

    if (showLeaderBoard === true) {
      content = this.__leaderBoard();
    } else {
      content = this.__blocksGame();
    }

    return(
      <div className="blocks-page container">
        {content}
      </div>
    )
  }
}

export default BlocksPage
