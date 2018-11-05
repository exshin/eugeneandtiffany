import React from 'react';
import { Button } from 'react-bootstrap'

class HomePage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="home-page container">
        <img src={require('./../../assets/images/test.jpg')} height="500px"/>
      </div>
    )
  }
}

export default HomePage
