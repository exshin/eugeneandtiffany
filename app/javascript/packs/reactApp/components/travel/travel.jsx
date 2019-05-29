import React from 'react';
import { Button } from 'react-bootstrap'

// import MapContainer from './maps.jsx' // Not implementing due to high costs

class TravelPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    const hotelBookingLink = "https://www.marriott.com/event-reservations/reservation-link.mi?id=1550266610811&key=GRP&app=resvlink";

    return(
      <div className="travel-page travelBG">
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Travel and Accommodations</h1>
        <hr/>

        <br/>

        <div className="hotel-info" style={{textAlign: "center"}}>
          <div className="hotel-description">
            <div>Hello Travelers! We have reserved a room block at the Aloft Cupertino Hotel for our guests.</div>
            <br/>

            <div className="container">
              <div className="container hotel-picture" style={{float: "right",
                position: "relative",
                width: "40%",
                right: "38%"}}>
                <img src={require('./../../assets/images/aloft_cupertino.jpg')} height="100px" width="100px" style={{borderRadius: "50%"}}/>
              </div>
              <div className="container" style={{width: "20%", float: "right", position: "relative", right: "-5%"}}>
                <div>Aloft Cupertino Hotel</div>
                <div><a href="https://bit.ly/2ICjZUr" target="/">10165 N De Anza Blvd, Cupertino, CA 95014</a></div>
                <div>(408) 766-7000</div>
              </div>
            </div>
            <br/>

            <div className="container">
              <div>
                <h4>Location</h4>
                <div>Situated between the San Jose Airport and the wedding venue, </div>
                <div>it is about a 15 minute drive from each.</div>
                <div className="hotel-map">
                  <img className="addImgBorder" src={require('./../../assets/images/travel_map.png')} height="300px"/>
                </div>
                <br/>
              </div>
              <div>
                <h4>Rates</h4>
                <div>Aloft, Guest room, 1 King - $119 per night</div>
                <div>Aloft, Guest room, 2 Queen - $129 per night</div>
              </div>
              <div>
                <h4>Dates Available</h4>
                <div>Start Date: Saturday, August 10, 2019</div>
                <div>End Date: Monday, August 12, 2019</div>
                <div style={{fontStyle: "oblique"}}>Last Day to Book: <strong>Friday, July 19, 2019</strong></div>
              </div>
              <br/>
              <div style={{fontSize: "large"}}>To request a room at our room block rate, please visit <a href={hotelBookingLink} target="/">THIS LINK</a>.</div>
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
