import React from 'react';
import { Button, Panel } from 'react-bootstrap'

import QuizPage from './quiz.jsx'
import TobyPage from './toby.jsx'
import ColorsPage from './colors.jsx'
import Garden from './garden.jsx'
import BlocksPage from './blocks.jsx'
import Leaderboard from './leaderboard.jsx'

class ExtrasPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: "index",
      backgroundHeight: "100vh"
    };
  }

  __click(game) {
    this.setState({
      game: game
    });
  }

  __clickShowLeaderBoard() {
    this.setState({
      game: "leaderboard",
      backgroundHeight: "100%"
    })
  }

  render() {
    const {backgroundHeight} = this.state;

    let content;
    let showIndex = true;
    let titleClassName = "title-header";
    let showLeaderBoard = true;

    switch (this.state.game) {
      case "quiz":
        content = <QuizPage/>;
        showIndex = false;
        titleClassName = "title-header hidden";
        showLeaderBoard = false;
        break;
      case "toby":
        content = <TobyPage/>;
        showIndex = false;
        titleClassName = "title-header hidden";
        showLeaderBoard = false;
        break;
      case "garden":
        content = <Garden/>;
        showIndex = false;
        titleClassName = "title-header hidden";
        showLeaderBoard = false;
        break;
      case "colors":
        content = <ColorsPage/>;
        showIndex = false;
        titleClassName = "title-header hidden";
        showLeaderBoard = false;
        break;
      case "blocks":
        content = <BlocksPage/>;
        showIndex = false;
        titleClassName = "title-header hidden";
        showLeaderBoard = false;
        break;
      case "leaderboard":
        content = <Leaderboard/>;
        showIndex = false;
        titleClassName = "title-header hidden";
        showLeaderBoard = false;
        break;
      default:
        break;
    }

    return(
      <div className="extras-page gamesBG" style={{height: backgroundHeight}}>
        <h1 className={titleClassName} style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>For Fun</h1>
        <hr/>

        <div className="index container" hidden={!showIndex}>

          <Panel className="extras-panel" bsStyle="primary">
            <Panel.Heading style={{height: "75px"}}>
              <Panel.Title className="extras-panel-title" componentClass="h4">
                The "Are you a Eugene or a Tiffany? Who knows? Do you? Let's find out!" Game
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <img src={require('./../../assets/images/eugene_vs_tiffany_cropped.jpg')} style={{width: "100%", height: "250px", border: "1px solid black"}}/>
              <Button block onClick={this.__click.bind(this, "quiz")}>Play</Button>
            </Panel.Body>
          </Panel>

          <Panel className="extras-panel" bsStyle="primary">
            <Panel.Heading style={{height: "75px"}}>
              <Panel.Title className="extras-panel-title" componentClass="h4">
                Toby or Not Toby? - That is the Question.
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <img src={require('./../../assets/images/toby_avatar300.jpeg')} style={{width: "100%", height: "250px", border: "1px solid black"}}/>
              <Button block onClick={this.__click.bind(this, "toby")}>Play</Button>
            </Panel.Body>
          </Panel>

          <Panel className="extras-panel" bsStyle="primary">
            <Panel.Heading style={{height: "75px"}}>
              <Panel.Title className="extras-panel-title" componentClass="h4">
                Blocks
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <img src={require('./../../assets/images/colors/blocks.png')} style={{width: "100%", height: "250px", border: "1px solid black"}}/>
              <Button block onClick={this.__click.bind(this, "blocks")}>Play</Button>
            </Panel.Body>
          </Panel>

        </div>
        <div className="content container">
          {content}
          <div className="leaderboard-button div-center" style={{marginTop: "30px", width: "15%"}} hidden={!showLeaderBoard}>
            <Button onClick={this.__clickShowLeaderBoard.bind(this)}>View Leaderboard</Button>
          </div>
          <br/>
        </div>
      </div>
    )
  }
}

export default ExtrasPage
