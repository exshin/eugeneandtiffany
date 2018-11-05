import React from 'react';
import { Button } from 'react-bootstrap'

class ExtrasPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="extras-page container">
        <h1>Extras Section</h1>
        <Button onClick={this.__click.bind(this)}>Check</Button>
      </div>
    )
  }
}

export default ExtrasPage
