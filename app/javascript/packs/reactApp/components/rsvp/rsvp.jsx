import React from 'react';
import { Button } from 'react-bootstrap'

class RsvpPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="rsvp-page container">
        <h1>RSVP Section</h1>
        <Button onClick={this.__click.bind(this)}>Check</Button>
      </div>
    )
  }
}

export default RsvpPage
