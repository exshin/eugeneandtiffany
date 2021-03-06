import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Modal, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap'

import HomePage from './home/home.jsx'
import TravelPage from './travel/travel.jsx'
import PhotosPage from './photos/photos.jsx'
import AdminPage from './admin/admin.jsx'
import RsvpPage from './rsvp/rsvp.jsx'
import SchedulePage from './schedule/schedule.jsx'
import RegistryPage from './registry/registry.jsx'
import ExtrasPage from './extras/extras.jsx'

import $ from 'jquery'

class LandingPageWedding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      admin: false, // change this to false for prod,
      authenticated: false, // change this to false for prod
      password: '',
      incorrectPassword: false,
    };
  }

  componentDidMount() {
    // for the remember me
    this.__checkToken();
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
        incorrectPassword: !result.auth,
      });
      localStorage.setItem('tiffanyandeugeneauthtoken', result.token);
    }
  }

  __checkToken() {
    const token = localStorage.getItem('tiffanyandeugeneauthtoken');

    if (token) {
      $.ajax({
        type: "GET",
        url: "/tokens/find_token",
        data: {
          token: token,
        },
        dataType: "json",
        success: this.__handleTokenAuthSuccess.bind(this)
      });
    }
  }

  __handleTokenAuthSuccess(result) {
    if (result) {
      this.setState({
        authenticated: true,
        admin: result.admin,
        incorrectPassword: false
      });
    }
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

    const uniqueId = new Date().toISOString();

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
          content = <HomePage key={uniqueId}/>;
          break;
        case 2:
          content = <TravelPage key={uniqueId}/>;
          break;
        case 3:
          content = <SchedulePage key={uniqueId}/>;
          break;
        case 4:
          content = <PhotosPage key={uniqueId}/>;
          break;
        case 5:
          content = <RsvpPage key={uniqueId}/>;
          break;
        case 6:
          content = <ExtrasPage key={uniqueId}/>;
          break;
        case 7:
          content = <AdminPage key={uniqueId}/>;
          break;
        case 8:
          content = <PhotosPage key={uniqueId}/>;
          break;
        case 9:
          content = <RegistryPage key={uniqueId}/>;
          break;
        default:
          break;
      }

      return(
        <div id="landing-page">
          <div className="navbar" style={{marginBottom: "0px"}}>
            <Navbar collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav activeKey={activeTab} onSelect={this.__handleSelect.bind(this)}>
                  <NavItem className="nav-item nav-home" eventKey={1} href="#">
                    Welcome
                  </NavItem>
                  <NavItem className="nav-item nav-schedule" eventKey={3} href="#">
                    Schedule
                  </NavItem>
                  <NavItem className="nav-item nav-rsvp" eventKey={5} href="#">
                    RSVP
                  </NavItem>
                  <NavItem className="nav-item nav-travel" eventKey={2} href="#">
                    Travel & Accommodations
                  </NavItem>
                  <NavItem className="nav-item nav-rsvp" eventKey={8} href="#">
                    Photos
                  </NavItem>
                  <NavItem className="nav-item nav-rsvp" eventKey={9} href="#">
                    Registry
                  </NavItem>
                  <NavItem className="nav-item nav-extras" eventKey={6} href="#">
                    For Fun
                  </NavItem>
                  {this.__navAdmin()}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="content">
            <div>
              {content}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default LandingPageWedding
