import React from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

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

  __rsvp(rsvp, index) {
    const {first_name, last_name, email, dietary_restrictions, attending, updated_at} = rsvp;

    return (
      <div key={index} className="rsvp container">
        <div>Name: {first_name} {last_name}</div>
        <div>Email: {email}</div>
        <div>Will You Be Attending? {attending}</div>
        <div>Any Dietary Requirements? {dietary_restrictions}</div>
        <br/>
      </div>
    )
  }

  __showRsvps() {
    const {rsvps} = this.state;

    return (
      <div className="rsvps container">
        {rsvps.map((rsvp, index) => {
          return this.__rsvp(rsvp, index)
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
      content = this.__showRsvps();
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
