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
    debugger;
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
          <Panel onClick={this.__click.bind(this, "quiz")}>
            <Panel.Body>The "Are you a Eugene or Tiffany? Who knows? Do you? Let's find out!" Game</Panel.Body>
            <Panel.Body><Button>Play</Button></Panel.Body>
          </Panel>
          <Panel onClick={this.__click.bind(this, "toby")}>
            <Panel.Body>Toby or Not Toby? - That is the Question.</Panel.Body>
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
