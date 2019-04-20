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
      rsvpFetchFail: false
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

  __rsvpView(rsvp, index) {
    const {first_name, last_name, email, dietary_restrictions, attending, updated_at} = rsvp;

    return (
      <div key={index} className="rsvp container">
        <Panel style={{width: "90%", background: "aliceblue"}}>
          <Panel.Heading style={{background: "lightsteelblue"}}>
            <Panel.Title componentClass="h3" style={{textAlign: "center", color: "white", fontSize: "24px"}}>{first_name} {last_name}</Panel.Title>
          </Panel.Heading>
          <br/>
          <Panel.Body>
            <div>Will You Be Attending? {attending}</div>
            <div>Any Dietary Requirements? {dietary_restrictions}</div>
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
        <div>Name: {first_name} {last_name}</div>
        <div className="container-fluid">
          <div style={{float: "left"}}>Will You Be Attending?</div>
          <div style={{float: "left"}}><Button>Yes</Button></div>
          <div style={{float: "left"}}><Button>No</Button></div>
        </div>
        <div className="container-fluid">
          Any Dietary Requirements?
        </div>
        <br/>
      </div>
    )
  }

  __showRsvps() {
    const {rsvps} = this.state;

    return (
      <div className="rsvps container">
        {rsvps.map((rsvp, index) => {
          return this.__rsvpView(rsvp, index)
        })}
      </div>
    )
  }

  __editRsvps() {
    const {rsvps} = this.state;

    return (
      <div className="rsvps container">
        {rsvps.map((rsvp, index) => {
          return this.__rsvpView(rsvp, index)
        })}
      </div>
    )
  }

  __showFetchRsvpFail() {
    return (
      <div>
        Sorry, we couldn't find your RSVP. Please try again or contact us.
      </div>
    )
  }

  render() {
    const {rsvps, rsvpFetchFail} = this.state;
    let content;

    if (rsvps.length > 0) {
      let rsvpd_count = 0;
      rsvps.map(rsvp => {
        if (rsvp.attending != null) {
          rsvpd_count += 1
        }
      });

      if (rsvpd_count === 0) {
        // No one in this rsvp group has rsvpd yet so immediately go to rsvp edit
        content = this.__editRsvps();
      } else {
        // Just show the rsvp
        content = this.__showRsvps();
      }
    }

    if (rsvpFetchFail) {
      content = this.__showFetchRsvpFail();
    }

    return(
      <div className="rsvp-page container">
        <h1>Find your RSVP</h1>
        <Form role="form" inline onSubmit={this.__handleFindRSVP.bind(this)}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>First Name</ControlLabel>{' '}
            <FormControl type="text" placeholder="" />
          </FormGroup>{' '}
          <FormGroup controlId="formInlineName">
            <ControlLabel>Last Name</ControlLabel>{' '}
            <FormControl type="text" placeholder="" />
          </FormGroup>{' '}
          <Button bsStyle="primary" type="submit">Submit</Button>
        </Form>
        <br/>
        {content}
      </div>
    )
  }
}

export default RsvpPage
