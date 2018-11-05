import React from 'react';
import { Button } from 'react-bootstrap'

class PhotosPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="photos-page container">
        <h1>Photos Page!</h1>
        <Button onClick={this.__click.bind(this)}>Check</Button>
      </div>
    )
  }
}

export default PhotosPage
