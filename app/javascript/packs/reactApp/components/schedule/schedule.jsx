import React from 'react';
import { Button, Panel, Glyphicon } from 'react-bootstrap'

class SchedulePage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    let eventAddressLink = "https://www.google.com/maps/place/Saratoga+Springs+Events+%26+Weddings/@37.2498651,-122.068302,15z/data=!4m5!3m4!1s0x0:0x5eb7cbd719ad3eea!8m2!3d37.2498654!4d-122.068302";

    return(
      <div className="schedule-page scheduleBG">
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Schedule</h1>
        <hr/>

        <br/>

        <div className="schedule" style={{textAlign: "center"}}>
          <Panel className="div-center" style={{width: "40%", background: "whitesmoke", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="" style={{fontSize: "18px", fontStyle: "italic"}}>
              <div style={{fontFamily: "cursive", fontSize: "34px"}}>Ceremony & Reception</div>
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

        <div className="schedule" style={{textAlign: "center"}}>
          <Panel className="div-center" style={{width: "40%", background: "whitesmoke", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="" style={{fontSize: "14px", fontStyle: "italic"}}>
              <div style={{fontFamily: "cursive", fontSize: "28px"}}>Menu</div>
              <br/>
              <div>
                <div className="container" style={{float: "left", width: "5%", padding: "0px"}}>
                  <Glyphicon glyph="leaf" />
                </div>
                Seasonal Green Salad with Heirloom Tomatoes, Avocado, Red Onions & a Miso-Sesame Dressing
              </div>
              <br/>
              <div>
                <div className="container" style={{float: "left", width: "5%", padding: "0px"}}>
                  <img src={require('./../../assets/images/cow.png')} height="20px" width="20px"/>
                </div>
                Sweet-Soy Braised Short-Ribs with Dates, Asian-Pears & Radish
              </div>
              <br/>
              <div>
                <div className="container" style={{float: "left", width: "5%", padding: "0px"}}>
                  <img src={require('./../../assets/images/fish.png')} height="20px" width="20px"/>
                </div>
                Honey & Miso-Glazed Salmon Fillets
              </div>
              <br/>
              <div>
                <div className="container" style={{float: "left", width: "5%", padding: "0px"}}>
                  <Glyphicon glyph="leaf" />
                </div>
                Japchae Noodles with Stir-Fried Veggies & Shiitake Mushrooms
              </div>
              <br/>
              <div>
                <div className="container" style={{float: "left", width: "5%", padding: "0px"}}>
                  <Glyphicon glyph="leaf" />
                </div>
                Roasted Vegetables (Bok Choy, Broccoli, Cauliflower, Shiitake Mushrooms, Onions) in Oyster-Plum Reduction
              </div>
              <br/>
            </Panel.Body>
          </Panel>
        </div>

        <br/>
        <br/>

      </div>
    )
  }
}

export default SchedulePage
