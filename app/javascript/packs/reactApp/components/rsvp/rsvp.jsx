import React from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap'

import $ from 'jquery'

class RsvpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvps: [],
      firstName: "",
      lastName: "",
      rsvpFetchFail: false,
      rsvpEdit: false
    }
  }

  __handleFindRSVP() {
    event.preventDefault();
    const first_name = event.target.children[0].children[1].value;
    const last_name = event.target.children[1].children[1].value;

    $.ajax({
      type: "GET",
      url: "/rsvp/find_groups_by_name",
      data: {first_name: first_name, last_name: last_name},
      dataType: "json",
      complete: this.__rsvpSuccess.bind(this)
    });
  }

  __rsvpSuccess(result) {
    if (result && result.responseJSON) {
      if (result.responseJSON.rsvps.length > 0) {
        this.setState({
          rsvps: result.responseJSON.rsvps,
          rsvpFetchFail: false
        })
      } else {
        this.setState({
          rsvpFetchFail: true
        })
      }
    }
  }

  __editRSVPClick() {
    this.setState({
      rsvpEdit: true
    });
  }

  __submitRsvp() {

  }

  __rsvpView(rsvp, index) {
    const {first_name, last_name, email, dietary_restrictions, attending, updated_at} = rsvp;

    return (
      <div key={index} className="rsvp container">
        <Panel style={{width: "40%", background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body>
            <div style={{fontFamily: "cursive", fontSize: "xx-large"}}>{first_name} {last_name}</div>
            <br/>
            <div>Will You Be Attending? {attending || "N/A"}</div>
            <div>Any Dietary Restrictions? {dietary_restrictions || "None"}</div>
            <img style={{float: "right"}} src={require('./../../assets/images/rsvp_flowers.png')} height="160px"/>
          </Panel.Body>
        </Panel>
        <br/>
      </div>
    )
  }

  __rsvpEdit(rsvp, index) {
    const {first_name, last_name, email, dietary_restrictions, attending, updated_at} = rsvp;

    return (
      <div key={index} className="rsvp container">
        <Panel className="div-center" style={{width: "50%", background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body className="rsvpPanelBG">
            <div style={{fontFamily: "cursive", fontSize: "xx-large"}}>{first_name} {last_name}</div>
            <hr className="gold-line"/>
            <br/>
            <br/>
            <div style={{marginBottom: "20px"}}>
              <div>Will You Be Attending?</div>
              <Button style={{float: "left", marginRight: "10px"}}>Joyfully Accept</Button>
              <Button>Regretfully Decline</Button>
            </div>
            <div style={{width: "75%"}}>
              <div>Any Dietary Restrictions?</div>
              <form>
                <FormControl
                  type="text"
                  value={this.state.value}
                />
              </form>
            </div>
            <br/>
            <br/>
            <br/>
          </Panel.Body>
        </Panel>
        <br/>
      </div>
    )
  }

  __showRsvps() {
    const {rsvps} = this.state;

    return (
      <div className="rsvps container">
        <br/>
        <div className="container">
          <div>Thank you for RSVPing!</div>
          <Button bsStyle="primary" onClick={this.__editRSVPClick.bind(this)}>Edit your RSVP</Button>
        </div>
        <br/>
        <div>
          {rsvps.map((rsvp, index) => {
            return this.__rsvpView(rsvp, index)
          })}
        </div>
      </div>
    )
  }

  __editRsvps() {
    const {rsvps} = this.state;

    return (
      <div className="rsvps container">
        {rsvps.map((rsvp, index) => {
          return this.__rsvpEdit(rsvp, index)
        })}
        <div className="rsvps container">
          <Button style={{marginLeft: "20px"}} bsStyle="primary" onClick={this.__submitRsvp.bind(this)}>Submit your RSVP!</Button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }

  __showFetchRsvpFail() {
    return (
      <div style={{textAlign: "center"}}>
        Sorry, we couldn't find your RSVP. Please try again or contact us.
      </div>
    )
  }

  __findRsvpContent() {
    return (
      <div className="container text-center">
        <Form role="form" inline onSubmit={this.__handleFindRSVP.bind(this)}>
          <FormGroup controlId="formInlineName" style={{marginRight: "15px"}}>
            <ControlLabel>First Name</ControlLabel>{' '}
            <FormControl type="text" placeholder="" />
          </FormGroup>{' '}
          <FormGroup controlId="formInlineName">
            <ControlLabel>Last Name</ControlLabel>{' '}
            <FormControl type="text" placeholder="" />
          </FormGroup>{' '}
          <Button bsStyle="primary" type="submit">Submit</Button>
        </Form>
      </div>

    )
  }

  __foundRsvpContent() {
    return (
      <div style={{textAlign: "center"}}>
        Please submit your RSVP by <strong>June 15th</strong>. Thank you!
      </div>
    )
  }

  render() {
    const {rsvps, rsvpFetchFail, rsvpEdit} = this.state;
    let content;
    let searchContent;

    if (rsvps.length > 0) {
      let rsvpd_count = 0;
      rsvps.map(rsvp => {
        if (rsvp.attending != null) {
          rsvpd_count += 1
        }
      });

      if (rsvpd_count === 0 || rsvpEdit) {
        // No one in this rsvp group has rsvpd yet so immediately go to rsvp edit
        content = this.__editRsvps();
      } else {
        // Just show the rsvp
        content = this.__showRsvps();
      }

      searchContent = this.__foundRsvpContent();
    } else {
      searchContent = this.__findRsvpContent();
    }

    if (rsvpFetchFail) {
      content = this.__showFetchRsvpFail();
    }

    return(
      <div className="rsvp-page container">
        <div className="container text-center">
          <h1>Find your RSVP</h1>
        </div>
        {searchContent}
        <br/>
        {content}
      </div>
    )
  }
}

export default RsvpPage
