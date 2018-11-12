import React from 'react';
import { Button, Panel } from 'react-bootstrap'

import QuizPage from './quiz.jsx'
import TobyPage from './toby.jsx'

class ExtrasPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: "index"
    };
  }

  __click(game) {
    this.setState({
      game: game
    });
  }

  render() {
    let content;
    let showIndex = true;
    switch (this.state.game) {
      case "quiz":
        content = <QuizPage/>;
        showIndex = false;
        break;
      case "toby":
        content = <TobyPage/>;
        showIndex = false;
        break;
      default:
        break;
    }

    return(
      <div className="extras-page container">
        <div className="index container" hidden={!showIndex}>

          <Panel className="extras-panel" bsStyle="primary">
            <Panel.Heading style={{height: "75px"}}>
              <Panel.Title style={{textAlign: "center"}} componentClass="h4">
                The "Are you a Eugene or a Tiffany? Who knows? Do you? Let's find out!" Game
              </Panel.Title>
            </Panel.Heading>
            <img src={require('./../../assets/images/eugene_vs_tiffany_cropped.jpg')} style={{width: "100%", height: "60%"}}/>
            <Panel.Body>
              <Button block onClick={this.__click.bind(this, "quiz")}>Play</Button>
            </Panel.Body>
          </Panel>

          <Panel className="extras-panel" bsStyle="primary">
            <Panel.Heading style={{height: "75px"}}>
              <Panel.Title style={{textAlign: "center"}} componentClass="h4">
                Toby or Not Toby? - That is the Question.
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Button block onClick={this.__click.bind(this, "toby")}>Play</Button>
            </Panel.Body>
          </Panel>

          <Panel className="extras-panel" bsStyle="primary">
            <Panel.Heading style={{height: "75px"}}>
              <Panel.Title style={{textAlign: "center"}} componentClass="h4">
                Another Game.
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Button block onClick={this.__click.bind(this, "game")}>Play</Button>
            </Panel.Body>
          </Panel>

        </div>
        <div className="content container">
          {content}
        </div>
      </div>
    )
  }
}

export default ExtrasPage
