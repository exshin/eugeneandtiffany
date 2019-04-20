import React from 'react';
import { Button } from 'react-bootstrap'

// import MapContainer from './maps.jsx' // Not implementing due to high costs

class TravelPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="travel-page container">
        <h1>Travel</h1>
        <hr/>

        <div className="container">
          Hello Travelers!
        </div>

        <br/>

        <div className="container hotel-info">
          <div className="container hotel-description">
            <div>
              We have reserved a room block at the Aloft Cupertino Hotel <a href="https://bit.ly/2ICjZUr" target="/">(Google Maps Link)</a>
              <div className="container hotel-picture">
                <img style={{float: "left"}} src={require('./../../assets/images/aloft_cupertino.jpg')} height="160px"/>
              </div>
            </div>
            <br/>
            <div>
              It is situated in between the San Jose Airport and the wedding venue, about a 15 minute drive from each.
              <div className="container hotel-map">
                <img style={{float: "left"}} src={require('./../../assets/images/travel_map.png')} height="400px"/>
              </div>
            </div>
            <br/>
            <div>
              To request a room at our room block rate, please visit <a href="/" target="/">this link</a>
            </div>
          </div>

        </div>

        <hr/>

        <div>
          Things to do in the area here
        </div>

      </div>
    )
  }
}

export default TravelPage
