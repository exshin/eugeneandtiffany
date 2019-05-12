import React from 'react';
import { Button, Panel } from 'react-bootstrap'

class SchedulePage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    let eventAddressLink = "https://www.google.com/maps/place/Saratoga+Springs+Events+%26+Weddings/@37.2498651,-122.068302,15z/data=!4m5!3m4!1s0x0:0x5eb7cbd719ad3eea!8m2!3d37.2498654!4d-122.068302";

    return(
      <div className="schedule-page">
        <h1 style={{textAlign: "center"}}>Schedule</h1>
        <hr/>

        <br/>

        <div className="schedule" style={{textAlign: "center"}}>
          <Panel className="div-center" style={{width: "60%", background: "floralwhite", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="" style={{fontSize: "18px"}}>
              <div style={{fontFamily: "cursive", fontSize: "28px"}}>Ceremony & Reception</div>
              <br/>
              <div>Saratoga Springs Events and Weddings</div>
              <br/>
              <div><a href={eventAddressLink} target="/">22801 Big Basin Way, Saratoga, CA 95070</a></div>
              <br/>
              <div>August 11<sup>th</sup> 2019, 5:00 PM</div>
              <br/>
              <div>Semi-Formal Attire</div>
              <br/>
            </Panel.Body>
          </Panel>
        </div>

        <br/>
        <br/>


        <div className="menu" style={{textAlign: "center"}}>
          <h3>Menu</h3>
          <div>Korean Braised Short Ribs</div>
        </div>
      </div>
    )
  }
}

export default SchedulePage
