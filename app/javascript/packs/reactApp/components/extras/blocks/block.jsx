//
/*
Block logic

*/

import React from 'react'
import { Button, Table, Row, Col, Panel, Glyphicon, ProgressBar, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [0,1,2,3],
      cols: [0,1,2,3],
      moveCounter: 0,
      score: 0,
      coins: 0,
      tileState: {
        0: ['e', 'e', 'e', 'e'],
        1: ['e', 'e', 'e', 'e'],
        2: ['e', 'e', 'e', 'e'],
        3: ['e', 'e', 'e', 'e'],
      }
    };

    this.clickAdd = this.clickAdd.bind(this);
  }

  componentDidMount() {
    // Pull game
  }

  clickAdd(position) {
    // Player has clicked on a tile

    const { tileState, moveCounter } = this.state;
    const i = position[0];
    const j = position[1];

    // Resolve tile progression for PLAYER CLICK
    /*
     Tile click progression:
     Empty > Tilled > Seeded > Growth > Harvest
     Weeds > Empty
     Rocks > Broken Rocks > Empty
     */
    let newTileState = tileState;
    const currentTile = tileState[i][j];

    let nextTile;
    switch (currentTile) {
      case "e":
        nextTile = "t";
        break;
      case "t":
        nextTile = "s";
        break;
      case "s":
        nextTile = "g";
        break;
      case "g":
        // Player cannot interact with tile during growth
        nextTile = "h";
        break;
      case "h":
        // If harvest, increment coin
        nextTile = "t";
        break;
      case "w":
        nextTile = "e";
        break;
      case "r":
        nextTile = "r";
        break;
      case "r2":
        nextTile = "t";
        break;
      default:
        break;
    }

    // Resolve Automatic Tile Progression



    // Increment moveCounter


    let currentBoard = this.state.playerMoves;
    let totalBoard = currentBoard.concat(this.state.aiMoves);
    let index = totalBoard.indexOf(position);

    if (index === -1 && this.state.winner === "") {
      currentBoard.push(position);
      this.setState({ playerMoves: currentBoard }, function() {
        this.aiTurn(this.state.difficultyLevel)
      })
    }
  }

  render() {
    const {rows, cols, tileState} = this.state;

    return (
      <div>
        <div className="container" style={{textAlign: "center"}}>
          <h2>The Catnip Garden</h2>
        </div>

        <hr/>

        <div className="container" style={{textAlign: "center"}}>
          Be a catnip farmer! Grow catnip, earn coins, buy upgrades, and work your way to the top of the leaderboard!
        </div>

        <br/>
        <br/>

        <div className="garden-outer-board container-fluid">
          <div className="container-fluid border" style={{padding: "0px"}}>
            <div className="garden-board container-fluid" style={{padding: "0px"}}>
              {rows.map((row, i) =>
                <div className="row garden-board-row" key={ i } id={ String(i) }>
                  {cols.map((col, j) =>
                    <div className="col garden-board-col" key={ j } id={ String(j) }>
                      <Tiles i={ row } j={ col } tile={ tileState[row][col] } clickAdd={ this.clickAdd }/>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Block