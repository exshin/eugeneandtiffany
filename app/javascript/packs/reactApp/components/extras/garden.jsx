//
/*

Grid-based game in which you play as a farmer

 |---|---|---|---|
 |   | p | w | 3 |
 |---|---|---|---|
 |   |   | 3 | 3 |
 |---|---|---|---|
 | R | R | 1 | 1 |
 |---|---|---|---|
 | R | c | 1 | G |
 |---|---|---|---|


Each turn you get a crop (seed) to put down in the grid.
When you get a match of 3 adjacent crops, they begin to grow.
Each crop has its own amount of turns it takes to grow until they can be harvested.
Each crop has its own amount of coins/points you receive when they are harvested.

Crops
 Wheat: {growth: 1, harvest: 2}
 Potato: {growth: 2, harvest: 3}
 Carrot: {growth: 3, harvest: 4}
 Turnip: {growth: 3, harvest: 5}
 Watermelon: {growth: 4, harvest: 7}

Mountain goats come to destroy crops?
Soil becomes unusable (rocks?) after harvest for 1 turn

Buying upgrades with coins will allow you to progress further



Grid-based game in which you play a catnip farmer

Grow catnip, earn coins, and buy upgrades

Tile click progression:
  Empty > Tilled > Seeded > Growth > Harvest
  Weeds > Empty
  Rocks > Broken Rocks > Empty

  Maybe make it like triple town with different crops
  catnip, turnips, carrots
  Goats will appear and eat your crops


Each click is 1 turn.
Each turn / each tile has a possible event
  Weeds > Rocks
  Empty > Weeds
  Tilled > Empty
  Growth > Empty (neighbor's cat comes to eat and leaves more coin - rare event)

Game over when all grids are filled with Rocks or Broken Rocks


 |---|---|---|---|
 | w |   | g |   |
 |---|---|---|---|
 |   | w | g |   |
 |---|---|---|---|
 |   |   | s |   |
 |---|---|---|---|
 |   | w |   |   |
 |---|---|---|---|


Upgrades                   | Cost | Effect
  Hoe                        5      Weeds > Tilled
  Organic Catnip Seeds       5      Harvest gains more coins
  Fancy Cat Toy              5      Cat event occurs more frequently
  Spreading Catnip Variety   8      Seeds sometimes randomly appear on Tilled tiles
  Better Soil                8      Weeds less likely to turn into Rocks



*/

import React from 'react'
import { Button, Table, Row, Col, Panel, Glyphicon, ProgressBar, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import Tiles from './garden/tiles.jsx'

class Garden extends React.Component {
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

    debugger;

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

export default Garden