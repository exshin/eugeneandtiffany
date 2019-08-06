import React from 'react';
import { Button, Panel, Glyphicon } from 'react-bootstrap'

import $ from 'jquery'

class SchedulePage extends React.Component {

  __handleHuntSuccess(result) {
  }

  __clickCow() {
    const foundBoh = localStorage.getItem("tiffanyandeugenefoundboh");
    const progress = localStorage.getItem("tiffanyandeugenehuntprogress");
    const hexdigest = localStorage.getItem("tiffanyandeugenehunthexdigest");

    if (progress && parseInt(progress) === 3) {
      localStorage.setItem("tiffanyandeugenehuntprogress", 4);

      $.ajax({
        type: "POST",
        url: "/hunts/progress",
        data: {
          hexdigest: hexdigest,
          progress: 4
        },
        complete: this.__handleHuntSuccess.bind(this)
      });
    }

    if (foundBoh === "true") {
      alert("Wow! You're fast! Come back to the cow after June 20th to continue the hunt!");

      /*
      Squeak! Thanks for finding a cow for me to eat!
      As a reward, I'll give you special access to a new game to beat!

       */
    }
  }

  render() {
    let eventAddressLink = "https://www.google.com/maps/place/Saratoga+Springs+Events+%26+Weddings/@37.2498651,-122.068302,15z/data=!4m5!3m4!1s0x0:0x5eb7cbd719ad3eea!8m2!3d37.2498654!4d-122.068302";

    return(
      <div className="schedule-page scheduleBG">
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Schedule</h1>
        <hr/>

        <br/>

        <div className="schedule" style={{textAlign: "center"}}>
          <Panel className="div-center" style={{width: "50%", background: "whitesmoke", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="" style={{fontSize: "18px", fontStyle: "italic"}}>
              <div style={{marginBottom: "10px"}}>
                <img src={require('./../../assets/images/headshots.jpg')} height="180px" width="180px" style={{borderRadius: "50%"}}/>
              </div>
              <div style={{fontFamily: "cursive", fontSize: "34px"}}>Ceremony & Reception</div>
              <br/>
              <div>Saratoga Springs Events and Weddings</div>
              <div style={{fontSize: "16px"}}><a href={eventAddressLink} target="/">22801 Big Basin Way, Saratoga, CA 95070</a></div>
              <br/>
              <div>August 11<sup>th</sup> 2019, 5:00 PM</div>
              <br/>
              <div>Semi-Formal Attire</div>
              <div style={{fontSize: "12px"}}>Please Note: The wedding, cocktail hour, and reception will be outdoors</div>
              <div style={{fontSize: "12px"}}>It will be fully shaded and cool in the evening</div>
              <br/>
            </Panel.Body>
          </Panel>
        </div>

        <br/>

        <div className="schedule-day" style={{textAlign: "center"}}>
          <Panel className="div-center" style={{width: "50%", background: "whitesmoke", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="" style={{fontSize: "18px", paddingBottom: "25px", paddingTop: "25px"}}>
              <img src={require('./../../assets/images/wedding_day_timeline.png')} height="300px" />
            </Panel.Body>
          </Panel>
        </div>

        <br/>

        <div className="schedule" style={{textAlign: "center"}}>
          <Panel className="div-center" style={{width: "50%", background: "whitesmoke", boxShadow: "lightgrey 5px 1px 7px"}}>
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
                  <img src={require('./../../assets/images/cow.png')} height="20px" width="20px" onClick={this.__clickCow.bind(this)}/>
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
