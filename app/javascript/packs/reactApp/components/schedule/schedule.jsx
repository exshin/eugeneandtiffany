import React from 'react';
import { Button } from 'react-bootstrap'

class SchedulePage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="schedule-page container">
        <h1>Schedule Section</h1>
        <Button onClick={this.__click.bind(this)}>Check</Button>

        <div>
          More details on the wedding schedule here...
          Include expected dinner menu
        </div>
      </div>
    )
  }
}

export default SchedulePage
