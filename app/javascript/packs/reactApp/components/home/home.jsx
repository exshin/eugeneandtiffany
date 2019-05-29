import React from 'react';
import { Button } from 'react-bootstrap'

class HomePage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="home-page welcomeBG" style={{height: "100vh"}}>
        <div className="text-center" style={{paddingTop: "70px"}}>
          <div className="getting-married-text">
            Tiffany and Eugene are getting married!
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
