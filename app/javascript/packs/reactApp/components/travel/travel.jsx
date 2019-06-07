import React from 'react';
import { Button, Grid, Row, Col, Table, Panel } from 'react-bootstrap'

// import MapContainer from './maps.jsx' // Not implementing due to high costs

class TravelPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
    };
  }

  __handleSelect(eventKey, event) {
    const { activeTab } = this.state;
    event.preventDefault();

    if (activeTab === eventKey) {
      this.setState({
        activeTab: 1
      });
    }

    this.setState({
      activeTab: eventKey
    });
  }

  __hotelClick(hotel, e) {
    console.log(hotel);
  }

  __hotelContainer() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <div className="container intro" style={{textAlign: "center", fontSize: "14px"}}>
              <div>
                Hello Travelers! We've reserved some room blocks for you at a discounted rate! Please book through the links provided below to get access to our room block rates.
              </div>
              <div>
                Each hotel will have between 10 - 15 rooms blocked for us, so if a hotel is showing no availabilities it has likely been filled.
              </div>
              <div>
                Please note that the last date to book through our room blocks is <u><strong>July 19th</strong></u>!
              </div>
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
      <div className="div-center container">
        <div>
          <div>
            There are 2 major airports in the Bay Area close to our venue
          </div>
          <br/>

          <div>
            <h4>Norman Y. Mineta San Jose International Airport (SJC)</h4>
            <ul>
              <li>SJC is about 15-20 minutes from the hotels and 30 minutes from the venue.</li>
              <li>This is the preferred airport as it is much closer to the hotels and venue.</li>
            </ul>
            <div className="container">
              <img src={require(`./../../assets/images/sjc_map.jpg`)}
                   style={{width: "400px", border: "1px solid black"}} />
            </div>
          </div>

          <div>
            <h4>San Francisco International Airport (SFO)</h4>
            <ul>
              <li>SFO is 45-60 minutes from the hotels and the venue.</li>
              <li>While quite far from hotels and the venue, this may be preferable if you wish to spend time exploring San Francisco.</li>
            </ul>
            <div className="container">
              <img src={require(`./../../assets/images/sfo_map.jpg`)}
                   style={{width: "400px", border: "1px solid black"}} />
            </div>
          </div>

        </div>
        <div>

        </div>
      </div>
    )
  }

  __eatsContainer() {
    return (
      <div>

      </div>
    )
  }

  render() {
    const {activeTab} = this.state;

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
      default:
        break;
    }


    return(
      <div className="travel-page travelBG">
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
