import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Modal, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

import HomePage from './home/home.jsx'
import TravelPage from './travel/travel.jsx'
import PhotosPage from './photos/photos.jsx'
import AdminPage from './admin/admin.jsx'
import RsvpPage from './rsvp/rsvp.jsx'
import SchedulePage from './schedule/schedule.jsx'
import ExtrasPage from './extras/extras.jsx'

import $ from 'jquery'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      authenticated: true, // change this to false for prod
      password: '',
      incorrectPassword: false,
      admin: true // change this to false for prod
    };
  }

  componentDidMount() {
    // for the remember me
  }

  __authenticate(password) {
    $.ajax({
      type: "GET",
      url: "/required_password/password",
      data: {
        password: password,
      },
      dataType: "json",
      success: this.__handleAuthSuccess.bind(this)
    });
  }

  __handleAuthSuccess(result) {
    if (result) {
      this.setState({
        authenticated: result.auth,
        admin: result.admin,
        incorrectPassword: !result.auth
      });
    }
  }

  __handleSelect(eventKey, event) {
    event.preventDefault();
    this.setState({
      activeTab: eventKey
    });
  }

  __handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  __handleAuth() {
    const { password } = this.state;
    this.__authenticate(password);
  }

  __authMessage() {
    if (this.state.incorrectPassword) {
      return (
        <div style={{color: "red"}}>
          Password is incorrect. Please try again!
        </div>
      )
    }
  }

  __authPopUp() {
    const { authenticated } = this.state;

    return (
      <div className="static-modal">
        <Modal show={!authenticated}>
          <Modal.Header closeButton>
            <Modal.Title>This Website is Password Protected</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Please enter the password provided on the invite to access this site</ControlLabel>
                <FormControl
                  type="password"
                  value={this.state.value}
                  onChange={this.__handlePasswordChange.bind(this)}
                  onKeyPress={event => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      this.__handleAuth();
                    }
                  }}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
            {this.__authMessage()}
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.__handleAuth.bind(this)}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  __navAdmin() {
    const { admin } = this.state;
    if (admin) {
      return (
        <NavItem className="nav-item nav-admin" eventKey={7} href="#">
          Admin
        </NavItem>
      )
    }
  }

  render() {
    const { activeTab, authenticated } = this.state;

    if (!authenticated) {
      return (
        <div id="landing-page">
          {this.__authPopUp()}
        </div>
      )
    } else {
      let content;
      switch (activeTab) {
        case 1:
          content = <HomePage/>;
          break;
        case 2:
          content = <TravelPage/>;
          break;
        case 3:
          content = <SchedulePage/>;
          break;
        case 4:
          content = <PhotosPage/>;
          break;
        case 5:
          content = <RsvpPage/>;
          break;
        case 6:
          content = <ExtrasPage/>;
          break;
        case 7:
          content = <AdminPage/>;
          break;
        default:
          break;
      }

      return(
        <div id="landing-page">
          <div className="navbar">
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Tiffany + Eugene</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav activeKey={activeTab} onSelect={this.__handleSelect.bind(this)}>
                  <NavItem className="nav-item nav-home" eventKey={1} href="#">
                    Home
                  </NavItem>
                  <NavItem className="nav-item nav-travel" eventKey={2} href="#">
                    Travel
                  </NavItem>
                  <NavItem className="nav-item nav-schedule" eventKey={3} href="#">
                    Schedule
                  </NavItem>
                  <NavItem className="nav-item nav-photos" eventKey={4} href="#">
                    Photos
                  </NavItem>
                  <NavItem className="nav-item nav-rsvp" eventKey={5} href="#">
                    RSVP
                  </NavItem>
                  <NavItem className="nav-item nav-extras" eventKey={6} href="#">
                    Extras
                  </NavItem>
                  {this.__navAdmin()}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="content container">
            <div style={ { backgroundImage: `url(require("./../assets/images/img.svg"))` } }>
              {content}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default LandingPage
