import React from 'react';
import { Button, Grid, Row, Col, Table, Panel, Label } from 'react-bootstrap'

// import MapContainer from './maps.jsx' // Not implementing due to high costs

class TravelPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      mouse: false,
      mouseIndex: 0,
      backgroundHeight: "100%"
    };
  }

  componentDidMount() {
    const mouse = localStorage.getItem("tiffanyandeugenehuntstart");
    if (mouse === "true") {
      this.setState({
        mouse: true
      });
    }
  }

  __handleSelect(eventKey, event) {
    const { activeTab } = this.state;
    event.preventDefault();

    if (activeTab === eventKey) {
      this.setState({
        activeTab: 1,
        backgroundHeight: "100%"
      });
    }

    this.setState({
      activeTab: eventKey,
      backgroundHeight: "100%"
    });
  }

  __hotelClick(hotel, e) {
    console.log(hotel);
  }

  __clickMouse() {
    this.setState({
      activeTab: 4,
      backgroundHeight: "100vh"
    });
  }

  __hotelContainer() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <div className="container intro" style={{textAlign: "center", fontSize: "14px"}}>
              <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
                <Panel.Body className="">
                  <div>
                    Hello Travelers! We've reserved some room blocks for you at a discounted rate! Please book through the links provided below to get access to our room block rates.
                  </div>
                  <div>
                    Each hotel will have between 10 - 15 rooms blocked for us, so if a hotel is showing no availabilities it has likely been filled.
                  </div>
                  <div>
                    Please note that the last date to book through our room blocks is <u><strong>July 19th</strong></u>!
                  </div>
                </Panel.Body>
              </Panel>
            </div>
          </Row>
          <br/>
          <Row className="show-grid">
            <Col xs={6} md={4} style={{marginLeft: "10px", width: "40%", paddingRight: "0px"}}>
              <div className="hotel-map">
                <img className="addImgBorder" src={require('./../../assets/images/hotels_map.jpg')} height="350px"/>
              </div>
              <br/>
              <div>
                <a href="https://goo.gl/maps/wj9vSuijo2g7VfVS6" target="/">View Hotels List on Google Maps</a>
              </div>
            </Col>

            <Col xs={10} md={7}>

              <Row className="show-grid">
                <Panel bsStyle="primary">
                  <Panel.Body className="hotelPanel" onClick={this.__hotelClick.bind(this, "aloft")}>
                    <Col xs={6} md={7} style={{padding: "0px"}}>
                      <div className="container" style={{marginRight: "0px", marginLeft: "0px", width: "100%"}}>
                        <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                          <img src={require('./../../assets/images/courtyardmarriott.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="" style={{float: "left", marginLeft: "20px", marginTop: "10px"}}>
                          <div>Courtyard Marriott</div>
                          <div style={{fontSize: "12px"}}><a href="https://www.google.com/maps/place/10605+N+Wolfe+Rd,+Cupertino,+CA+95014/@37.3322262,-122.017649,17z/data=!3m1!4b1!4m5!3m4!1s0x808fb597d3a31c4b:0x4fef8e165e91953e!8m2!3d37.3322262!4d-122.0154603" target="/">10605 North Wolfe Road, Cupertino</a></div>
                          <div style={{fontSize: "12px"}}>(408) 252-9100</div>
                          <div><a href="https://www.marriott.com/events/start.mi?id=1559317318476&key=GRP" target="/">BOOK HERE</a></div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={4} style={{padding: "0px"}}>
                      <div>
                        <h5>Rates</h5>
                        <div style={{fontSize: "12px"}}>
                          <div>1 King, Sofa bed - $99 / night</div>
                          <div>2 Double beds - $99 / night</div>
                        </div>
                      </div>
                    </Col>
                  </Panel.Body>
                </Panel>
              </Row>

              <Row className="show-grid">
                <Panel bsStyle="primary">
                  <Panel.Body className="hotelPanel" onClick={this.__hotelClick.bind(this, "aloft")}>
                    <Col xs={6} md={7} style={{padding: "0px"}}>
                      <div className="container" style={{marginRight: "0px", marginLeft: "0px", width: "100%"}}>
                        <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                          <img src={require('./../../assets/images/wildpalms.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="" style={{float: "left", marginLeft: "20px", marginTop: "10px"}}>
                          <div>Wild Palms Hotel</div>
                          <div style={{fontSize: "12px"}}><a href="https://www.google.com/maps/place/Wild+Palms+Hotel/@37.3519461,-122.0135551,15z/data=!4m2!3m1!1s0x0:0x74dd551c58050b4a?sa=X&ved=2ahUKEwjPqci12sfiAhUXrp4KHVpkDekQ_BIwKXoECC0QCA" target="/">910 E Fremont Ave, Sunnyvale</a></div>
                          <div style={{fontSize: "12px"}}>(408) 738-0500</div>
                          <div><a>Booking link coming soon</a></div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={4} style={{padding: "0px"}}>
                      <div>
                        <h5>Rates</h5>
                        <div style={{fontSize: "12px"}}>
                          <div>1 King bed - $99 / night</div>
                          <div>2 Double beds - $120 / night</div>
                        </div>
                      </div>
                    </Col>
                  </Panel.Body>
                </Panel>
              </Row>

              <Row className="show-grid">
                <Panel bsStyle="primary">
                  <Panel.Body className="hotelPanel" onClick={this.__hotelClick.bind(this, "aloft")}>
                    <Col xs={6} md={7} style={{padding: "0px"}}>
                      <div className="container" style={{marginRight: "0px", marginLeft: "0px", width: "100%"}}>
                        <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                          <img src={require('./../../assets/images/aloft_cupertino.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="" style={{float: "left", marginLeft: "20px", marginTop: "10px"}}>
                          <div>Aloft Cupertino Hotel</div>
                          <div style={{fontSize: "12px"}}><a href="https://bit.ly/2ICjZUr" target="/">10165 N De Anza Blvd, Cupertino</a></div>
                          <div style={{fontSize: "12px"}}>(408) 766-7000</div>
                          <div><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1550266610811&key=GRP&app=resvlink" target="/">BOOK HERE</a></div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={4} style={{padding: "0px"}}>
                      <div>
                        <h5>Rates</h5>
                        <div style={{fontSize: "12px"}}>
                          <div>1 King bed - $119 / night</div>
                          <div>2 Queen beds - $129 / night</div>
                        </div>
                      </div>
                    </Col>
                  </Panel.Body>
                </Panel>
              </Row>

              <Row className="show-grid">
                <Panel bsStyle="primary">
                  <Panel.Body className="hotelPanel" onClick={this.__hotelClick.bind(this, "aloft")}>
                    <Col xs={6} md={7} style={{padding: "0px"}}>
                      <div className="container" style={{marginRight: "0px", marginLeft: "0px", width: "100%"}}>
                        <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                          <img src={require('./../../assets/images/achotelsunnyvale.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="" style={{float: "left", marginLeft: "20px", marginTop: "10px"}}>
                          <div>AC Hotel Sunnyvale Cupertino</div>
                          <div style={{fontSize: "12px"}}><a href="https://www.google.com/maps/place/AC+Hotel+by+Marriott+Sunnyvale+Cupertino/@37.3624126,-122.0251817,15z/data=!4m2!3m1!1s0x0:0x4102651c00c9f48c?sa=X&ved=2ahUKEwiG7-Wz3MfiAhWVpp4KHdfECjsQ_BIwKXoECCsQCA" target="/">597 East El Camino Real, Sunnyvale</a></div>
                          <div style={{fontSize: "12px"}}>(408) 733-7950</div>
                          <div><a href="https://www.marriott.com/events/start.mi?id=1559346514320&key=GRP" target="/">BOOK HERE</a></div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={4} style={{padding: "0px"}}>
                      <div>
                        <h5>Rates</h5>
                        <div style={{fontSize: "12px"}}>
                          <div>1 King bed - $119 / night</div>
                        </div>
                      </div>
                    </Col>
                  </Panel.Body>
                </Panel>
              </Row>

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  __airportContainer() {
    return (
      <div className="div-center">
        <div className="div-center" style={{textAlign: "center", width: "50%"}}>
          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <div>
                There are 2 major airports in the Bay Area close to our venue
              </div>
            </Panel.Body>
          </Panel>
          <br/>

          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <h4>Norman Y. Mineta San Jose International Airport (SJC)</h4>
              <div>
                <li>SJC is about 15-20 minutes from the hotels and 30 minutes from the venue.</li>
                <li>This is the preferred airport as it is much closer to the hotels and venue.</li>
              </div>
              <div className="" style={{marginTop: "10px"}}>
                <img src={require(`./../../assets/images/sjc_map.jpg`)}
                     style={{width: "400px", border: "1px solid black"}} />
              </div>
            </Panel.Body>
          </Panel>

          <br/>
          <br/>

          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <div>
                <h4>San Francisco International Airport (SFO)</h4>
                <div>
                  <li>SFO is 45-60 minutes from the hotels and the venue.</li>
                  <li>While further away, SFO may be preferable if you wish to spend time exploring San Francisco.</li>
                </div>
                <div className="" style={{marginTop: "10px"}}>
                  <img src={require(`./../../assets/images/sfo_map.jpg`)}
                       style={{width: "400px", border: "1px solid black"}} />
                </div>
              </div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    )
  }

  __eatsContainer() {
    const {mouse} = this.state;

    return (
      <div className="div-center container">
        <div>
          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <div style={{fontSize: "16px"}}>
                See below for a list of our recommended eats in the area!
              </div>
              <div>
                <a href="https://goo.gl/maps/H8XwjfzUU2mSivb5A" target="/">Google Maps Link of These Recommendations</a>
              </div>
            </Panel.Body>
          </Panel>

          <br/>

          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <div>
                <h4>Desserts/Bakeries</h4>
                <ul>
                  <li><a href="https://www.yelp.com/biz/meet-fresh-cupertino?osq=meet+fresh+cupertino" target="/">MeetFresh</a> - Known for their Taiwanese desserts and long lines, Eugene enjoys his hot grass jelly here</li>
                  <li><a href="https://www.yelp.com/biz/85-c-bakery-cafe-cupertino-2?osq=85+Degrees" target="/">85 Degrees</a> - Standard asian bakery with good breads and an assortment of drinks</li>
                  <li><a href="https://www.yelp.com/biz/manresa-bread-caf%C3%A9-campbell?osq=Manresa+Bread" target="/">Manresa Bread</a> - Manresa is a Michelin restaurant. Apparently they opened up a bakery. It's probably good?</li>
                </ul>
              </div>
            </Panel.Body>
          </Panel>


          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <div>
                <h4>Restaurants</h4>
                <ul>
                  <li><a href="https://www.yelp.com/biz/chicken-meets-rice-santa-clara" target="/">Chicken Meets Rice</a> - Amazing Hainan chicken. Great for lunch</li>
                  <li><a href="https://www.yelp.com/biz/kunjip-restaurant-santa-clara-2?osq=Kunjip" target="/">Kunjip</a> - Best braised short ribs we've had in the Bay Area so far. You'll want to come early (lunch) before they run out!</li>
                  <li><a href="https://www.yelp.com/biz/tobang-santa-clara-2" target="/">Tobang</a> - Great bang for your buck korean bbq place. A little more on the low-key side, but the portions are huge</li>
                  <li><a href="https://www.yelp.com/biz/nutrition-restaurant-cupertino" target="/">Nutrition Restaurant</a> - Asian breakfast foods and other asian foods stuff. It's pretty good, but we've been here once</li>
                  <li><a href="https://www.yelp.com/biz/tapsilog-bistro-campbell" target="/">Tapislog</a> - Filipino food. Staff will try to claim you as their child supposedly</li>
                  <li><a href="https://www.yelp.com/biz/qq-noodle-cupertino?osq=QQ+Noodle+Cupertino" target="/">QQ Noodle Cupertino</a> - Supposedly has the best noodles here. We've never been though. Try it and tell us?</li>
                  <li><a href="https://www.yelp.com/biz/kizuna-san-jose" target="/">Kizuna</a> - If you're hankering for some Japanese curry, this place is super legit</li>
                  <li><a href="https://www.yelp.com/biz/xlb-kitchen-cupertino-3" target="/">XLB Kitchen</a> - Shanghainese food. Good soup dumplings (xiao long bao)</li>
                  <li><a href="https://www.yelp.com/biz/fugetsu-santa-clara" target="/">Fugetsu</a> - A highly recommended okonomiyaki place</li>
                </ul>
              </div>
            </Panel.Body>
          </Panel>

          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <div>
                <h4>Boba</h4>
                <ul>
                  <li><a href="https://www.yelp.com/biz/happy-lemon-sunnyvale-2" target="/">Happy Lemon</a> - Tiffany loves their salted milk teas and fresh grapefruit yakult drink</li>
                  <li><a href="https://www.yelp.com/biz/fantasia-coffee-and-tea-cupertino?osq=Fantasia" target="/">Fantasia</a> - Great milk teas here</li>
                  <li><a href="https://www.yelp.com/biz/teaspoon-santa-clara-7?osq=Teaspoon" target="/">Teaspoon</a> - Another great milk tea place</li>
                  <li><a href="https://www.yelp.com/biz/tp-tea-cupertino?osq=meet+fresh+cupertino" target="/">TP Tea</a> - A friend told us that this place has the best milk tea..</li>
                </ul>
              </div>
            </Panel.Body>
          </Panel>

          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="">
              <div>
                <h4>Recreation</h4>
                <ul>
                  <li><a href="https://www.yelp.com/biz/winchester-mystery-house-san-jose" target="/">Winchester Mystery House</a> - It's a mystery to us too!</li>
                  <li><a href="https://www.yelp.com/biz/santana-row-san-jose-3" target="/">Santana Row</a> - For fancy shopping. Get a Tesla!</li>
                  <li><a href="https://www.yelp.com/biz/hakone-estate-and-gardens-saratoga" target="/">Hakone Estate and Gardens</a> - Fun fact: We almost chose this place to host our wedding. It's very pretty here.</li>
                  <li><a href="https://www.yelp.com/biz/westfield-valley-fair-santa-clara-3?osq=West+Valley+Fair+Mall" target="/">Valley Fair Mall</a> - For normal shopping!</li>
                </ul>
              </div>
            </Panel.Body>
          </Panel>


          <br/>
          <br/>
          <br/>

          <div className="mouse-div" hidden={!mouse}>
            <img src={require("./../../assets/images/spirited_away_baby_mouse.png")}
                 height="50px" width="50px" onClick={this.__clickMouse.bind(this)} />
          </div>

          <br/>
        </div>
      </div>
    )
  }

  __mouseMessage() {
    const {mouseIndex} = this.state;
    const messages = [
      "Squeak!",
      "The hungry mouse has flown away.",
      "Perhaps he wanted to come and play",
      "and join us on our special day.",
      "If only there was a way to find",
      "a secret message left behind.",
      "Did you catch his name?"
    ];
    const message = messages[mouseIndex];

    window.scrollTo(0, 0); // scroll to top of page

    return (
      <div className="div-center" style={{textAlign: "center", width: "50%", marginTop: "30px"}}>
        <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body className="" style={{fontSize: "18px", fontStyle: "italic"}}>
            <div className="" style={{width: "70%", float: "left"}}>
              {message}
            </div>
            <div className="" style={{width: "25%", float: "left", fontSize: "24px"}}>
              <Button onClick={this.__nextMessage.bind(this)}>></Button>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )

  }

  __nextMessage() {
    const {mouseIndex} = this.state;

    if (mouseIndex === 6) {
      localStorage.setItem('tiffanyandeugenehuntstart', null);
      this.setState({
        activeTab: 1,
        mouseIndex: 0
      });
    } else {
      this.setState({
        mouseIndex: mouseIndex + 1
      });
    }

  }

  render() {
    const {activeTab, backgroundHeight} = this.state;

    let content;
    let buttonName1;
    let buttonName2;
    let buttonName3;
    switch (activeTab) {
      case 1:
        content = this.__hotelContainer();
        buttonName1 = "primary";
        buttonName2 = "default";
        buttonName3 = "default";
        break;
      case 2:
        content = this.__airportContainer();
        buttonName1 = "default";
        buttonName2 = "primary";
        buttonName3 = "default";
        break;
      case 3:
        content = this.__eatsContainer();
        buttonName1 = "default";
        buttonName2 = "default";
        buttonName3 = "primary";
        break;
      case 4:
        content = this.__mouseMessage();
        buttonName1 = "default";
        buttonName2 = "default";
        buttonName3 = "default";
        break;
      default:
        break;
    }


    return(
      <div className="travel-page travelBG" style={{height: backgroundHeight}}>
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Travel and Accommodations</h1>
        <hr/>

        <br/>

        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="travel-nav-buttons">
              <div>
                <Button bsStyle={buttonName1} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 1)}>Hotel Blocks</Button>
              </div>
              <div>
                <Button bsStyle={buttonName2} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 2)}>Airports</Button>
              </div>
              <div>
                <Button bsStyle={buttonName3} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 3)}>Recommended Eats</Button>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <br/>

        {content}

        <br/>

      </div>
    )
  }
}

export default TravelPage
