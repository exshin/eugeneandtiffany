import React from 'react';
import { Button, Table } from 'react-bootstrap'

import BootstrapTable from 'react-bootstrap-table-next';

import $ from 'jquery'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      tiffanyHighScores: [],
      eugeneHighScores: [],
      latestTiedScores: [],
      tobyScores: [],
    };
  }

  componentDidMount() {
    this.__fetchQuizScores();
  }

  //* FETCH EVENTS
  __fetchQuizScores() {
    $.ajax({
      type: "GET",
      url: "/quiz/all_scores",
      data: {},
      dataType: "json",
      complete: this.__handleFetchQuizScores.bind(this)
    });
  }

  __handleFetchQuizScores(result) {
    if (result && result.responseJSON) {
      if (result && result.responseJSON) {
        this.setState({
          tiffanyHighScores: result.responseJSON.tiffany_scores,
          eugeneHighScores: result.responseJSON.eugene_scores,
          latestTiedScores: result.responseJSON.latest_tied_high_scores
        });
      }
    }
  }

  __fetchTobyScores() {
    $.ajax({
      type: "GET",
      url: "/toby_game/high_scores",
      data: {},
      dataType: "json",
      complete: this.__handleFetchTobyScores.bind(this)
    });
  }

  __handleFetchTobyScores(result) {
    if (result && result.responseJSON) {
      if (result && result.responseJSON) {
        this.setState({
          tobyScores: result.responseJSON.high_scores
        });
      }
    }
  }
  //

  //* CONTENT CONTAINERS
  __QuizScoresPage() {
    const {tiffanyHighScores, eugeneHighScores, latestTiedScores} = this.state;

    return (
      <div className="container">
        <div className="container">
          <div className="container" style={{float: "left", width: "30%"}}>
            <h4 style={{color: "white"}}>"You Are A Tiffany" Scores</h4>
            <Table bordered style={{background: "white"}}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Tiffany Score</th>
              </tr>
              </thead>
              <tbody>
              {tiffanyHighScores.map((highScore, index) => {
                return this.__quizLeaderBoardEntries(highScore, "tiffany", index)
              })}
              </tbody>
            </Table>
          </div>

          <div className="container" style={{float: "left", width: "30%"}}>
            <h4 style={{color: "white"}}>"You Are A Eugene" Scores</h4>
            <Table bordered style={{background: "white"}}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Eugene Score</th>
              </tr>
              </thead>
              <tbody>
              {eugeneHighScores.map((highScore, index) => {
                return this.__quizLeaderBoardEntries(highScore, "eugene", index)
              })}
              </tbody>
            </Table>
          </div>

          <div className="container" style={{float: "left", width: "30%"}}>
            <h4 style={{color: "white"}}>Top 10 "Tied" Scores</h4>
            <Table bordered style={{background: "white"}}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Both Scores</th>
              </tr>
              </thead>
              <tbody>
              {latestTiedScores.map((highScore, index) => {
                return this.__quizLeaderBoardEntries(highScore, "tied", index)
              })}
              </tbody>
            </Table>
          </div>
        </div>

      </div>
    )
  }

  __quizLeaderBoardEntries(entry, leader, index) {
    // note: tied scores have the same tiffany and eugene scores, so just show one
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

  __TobyScoresPage() {
    const {tobyScores} = this.state;

    return (
      <div className="div-center">
        <div className="div-center" style={{width: "40%"}}>
          <Table className="container" bordered style={{background: "white", width: "80%"}}>
            <thead>
            <tr>
              <th>Placement</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {tobyScores.map((highScore, index) => {
              return this.__tobyLeaderBoardEntries(highScore, index)
            })}
            </tbody>
          </Table>
        </div>

      </div>
    )
  }

  __tobyLeaderBoardEntries(entry, index) {
    const score = Math.ceil(entry.score /12.0 * 100);

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

  //
  __handleSelect(eventKey, event) {
    const { activeTab } = this.state;
    event.preventDefault();

    if (activeTab === eventKey) {
      this.setState({
        activeTab: 1
      });
    }

    this.setState({
      activeTab: eventKey
    });

    switch (eventKey) {
      case 1:
        this.__fetchQuizScores();
        break;
      case 2:
        this.__fetchTobyScores();
        break;
      default:
        break
    }
  }

  render() {
    const { activeTab } = this.state;
    let content;
    let buttonName1;
    let buttonName2;

    switch (activeTab) {
      case 1:
        content = this.__QuizScoresPage();
        buttonName1 = "primary";
        buttonName2 = "default";
        break;
      case 2:
        content = this.__TobyScoresPage();
        buttonName1 = "default";
        buttonName2 = "primary";
        break;
      default:
        break;
    }

    return(
      <div className="leaderboard-page container">
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Leaderboard</h1>
        <hr/>

        <br/>

        <div className="row">
          <div className="col-md-6 col-md-offset-4">
            <div className="leaderboard-nav-buttons">
              <div>
                <Button bsStyle={buttonName1} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 1)}>Eugene Tiffany Quiz Scores</Button>
              </div>
              <div>
                <Button bsStyle={buttonName2} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 2)}>Toby Game Scores</Button>
              </div>
            </div>
          </div>
        </div>

        <div style={{marginTop: "25px"}}>
          {content}
        </div>
      </div>
    )
  }
}

export default Leaderboard