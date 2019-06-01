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
    debugger;
  }

  __hotelContainer2() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4} style={{marginLeft: "10px", width: "40%", paddingRight: "0px"}}>
              <div className="hotel-map">
                <img className="addImgBorder" src={require('./../../assets/images/travel_map.png')} height="300px"/>
              </div>
            </Col>

            <Col xs={10} md={7}>

              <Row className="show-grid">

                <Panel bsStyle="primary">
                  <Panel.Body className="hotelPanel" onClick={this.__hotelClick.bind(this, "aloft")}>
                    <Col xs={6} md={6} style={{padding: "0px"}}>
                      <div className="container" style={{marginRight: "0px", marginLeft: "0px"}}>
                        <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                          <img src={require('./../../assets/images/aloft_cupertino.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="" style={{float: "left", marginLeft: "10px", marginTop: "20px"}}>
                          <div>Aloft Cupertino Hotel</div>
                          <div style={{fontSize: "12px"}}><a href="https://bit.ly/2ICjZUr" target="/">10165 N De Anza Blvd, Cupertino</a></div>
                          <div style={{fontSize: "12px"}}>(408) 766-7000</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={3} style={{padding: "0px"}}>
                      <div>
                        <h5>Rates</h5>
                        <div style={{fontSize: "12px"}}>
                          <div>1 King bed - $119 per night</div>
                          <div>2 Queen beds - $129 per night</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={3} style={{padding: "0px"}}>
                      <div>
                        <h5>Booking</h5>
                        <div style={{fontSize: "12px"}}>
                          <div>
                            To book at our room block rate, please visit <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1550266610811&key=GRP&app=resvlink" target="/">THIS LINK</a>.
                          </div>
                          <div style={{fontStyle: "oblique"}}>Last Day to Book: <strong>Friday, July 19, 2019</strong></div>
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

  __hotelContainer() {
    const hotelBookingLink = "https://www.marriott.com/event-reservations/reservation-link.mi?id=1550266610811&key=GRP&app=resvlink";

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={5} style={{marginLeft: "100px", width: "40%", paddingRight: "0px"}}>
              <Panel bsStyle="primary" style={{width: "90%"}}>
                <div className="container" style={{marginRight: "0px", marginLeft: "0px"}}>
                  <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                    <img src={require('./../../assets/images/aloft_cupertino.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                  </div>
                  <div className="" style={{float: "left", marginLeft: "30px", marginTop: "20px"}}>
                    <div>Aloft Cupertino Hotel</div>
                    <div><a href="https://bit.ly/2ICjZUr" target="/">10165 N De Anza Blvd, Cupertino</a></div>
                    <div>(408) 766-7000</div>
                  </div>
                </div>
              </Panel>

              <br/>
              <Panel bsStyle="primary" style={{width: "90%"}}>
                <div className="container">
                  <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                    <img src={require('./../../assets/images/aloft_cupertino.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                  </div>
                  <div className="" style={{float: "left", marginLeft: "30px", marginTop: "20px"}}>
                    <div>Aloft Cupertino Hotel</div>
                    <div><a href="https://bit.ly/2ICjZUr" target="/">10165 N De Anza Blvd, Cupertino</a></div>
                    <div>(408) 766-7000</div>
                  </div>
                </div>
              </Panel>

              <br/>

              <Panel bsStyle="primary" style={{width: "90%"}}>
                <div className="container">
                  <div className="hotel-picture" style={{float: "left", marginTop: "10px", marginBottom: "10px"}}>
                    <img src={require('./../../assets/images/aloft_cupertino.jpg')} height="80px" width="80px" style={{borderRadius: "50%"}}/>
                  </div>
                  <div className="" style={{float: "left", marginLeft: "30px", marginTop: "20px"}}>
                    <div>Aloft Cupertino Hotel</div>
                    <div><a href="https://bit.ly/2ICjZUr" target="/">10165 N De Anza Blvd, Cupertino</a></div>
                    <div>(408) 766-7000</div>
                  </div>
                </div>
              </Panel>

            </Col>
            <Col xs={10} md={6}>
              <Panel bsStyle="primary">
                <div className="hotel-description">
                  <div className="container">
                    <div>
                      <h4>Location</h4>
                      <div style={{marginLeft: "15px"}}>
                        <div>Situated between the San Jose Airport and the wedding venue, </div>
                        <div>it is about a 15 minute drive from each.</div>
                        <div className="hotel-map">
                          <img className="addImgBorder" src={require('./../../assets/images/travel_map.png')} height="300px"/>
                        </div>
                      </div>
                      <br/>
                    </div>
                    <div>
                      <h4>Rates</h4>
                      <div style={{marginLeft: "15px"}}>
                        <div>Aloft, Guest room, 1 King - $119 per night</div>
                        <div>Aloft, Guest room, 2 Queen - $129 per night</div>
                      </div>
                    </div>
                    <div>
                      <h4>Dates Available</h4>
                      <div style={{marginLeft: "15px"}}>
                        <div>Start Date: Saturday, August 10, 2019</div>
                        <div>End Date: Monday, August 12, 2019</div>
                        <div style={{fontStyle: "oblique"}}>Last Day to Book: <strong>Friday, July 19, 2019</strong></div>
                      </div>
                    </div>
                    <div>
                      <h4>Booking</h4>
                      <div style={{marginLeft: "15px"}}>
                        <div>
                          To request a room at our room block rate, please visit <a href={hotelBookingLink} target="/">THIS LINK</a>.
                        </div>
                      </div>
                    </div>
                    <br/>
                    <br/>
                  </div>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  __airportContainer() {
    return (
      <div>

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
        content = this.__hotelContainer2();
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
