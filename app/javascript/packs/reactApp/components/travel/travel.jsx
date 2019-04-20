import React from 'react';
import { Button } from 'react-bootstrap'

class TravelPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="travel-page container">
        <h1>Travel Page!</h1>
        <Button onClick={this.__click.bind(this)}>Check</Button>

        <div>
          Hotel Info here
        </div>

        <div>
          Info on Airports and proximity to the venue
        </div>

        <div>
          Things to do in the area here
        </div>

      </div>
    )
  }
}

export default TravelPage
