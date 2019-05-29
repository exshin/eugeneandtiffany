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
      rsvpEdit: false,
      rsvpDone: false,
      rsvpSubmits: {}
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

  __submitRsvp(params) {
    // params need to include rsvp id, attending, dietary_restrictions
    $.ajax({
      type: "POST",
      url: "/rsvp/submit_rsvps",
      data: params,
      complete: this.__rsvpSuccessSubmit.bind(this)
    });
  }

  __rsvpSuccessSubmit() {
    // Successful RSVP submit
    this.setState({
      rsvpDone: true
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

  __submitRsvps() {
    // Submit rsvp for each person
    const {rsvpSubmits} = this.state;
    this.__submitRsvp(rsvpSubmits);
  }

  __rsvpView(rsvp, index) {
    const {first_name, last_name, email, dietary_restrictions, attending, updated_at} = rsvp;

    let attendingString;

    if (attending === true) {
      attendingString = "Yes! I will be there!"
    } else if (attending === false) {
      attendingString = "Sadly, I will not be joining..."
    } else {
      attendingString = "I'm not sure..."
    }
    return (
      <div key={index} className="rsvp container">
        <Panel className="div-center" style={{width: "40%", background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body className="rsvpPanelBGView" style={{marginRight: "5px"}}>
            <div style={{fontFamily: "cursive", fontSize: "xx-large"}}>{first_name} {last_name}</div>
            <br/>
            <div>Will You Be Attending? {attendingString || "N/A"}</div>
            <div>Any Dietary Restrictions? {dietary_restrictions || "None"}</div>
            <br/>
            <br/>
            <br/>
          </Panel.Body>
        </Panel>
        <br/>
      </div>
    )

  }

  __yes(id, e) {
    const {rsvpSubmits} = this.state;
    let submit = rsvpSubmits;
    if (!rsvpSubmits[id]) {
      submit[id] = {};
    }
    submit[id]['attending'] = true;
    this.setState({
      rsvpSubmits: submit
    });
    e.target.className = 'btn btn-primary';
    e.target.nextElementSibling.className = 'btn btn-default';
  }

  __no(id, e) {
    const {rsvpSubmits} = this.state;
    let submit = rsvpSubmits;
    if (!rsvpSubmits[id]) {
      submit[id] = {};
    }
    submit[id]['attending'] = false;
    this.setState({
      rsvpSubmits: submit
    });
    e.target.className = 'btn btn-primary';
    e.target.previousElementSibling.className = 'btn btn-default';
  }

  __handleDietTextChange(id, e) {
    const {rsvpSubmits} = this.state;
    let submit = rsvpSubmits;
    if (!rsvpSubmits[id]) {
      submit[id] = {};
    }
    submit[id]['dietary_restrictions'] = e.target.value;
    this.setState({
      rsvpSubmits: submit
    });
  }

  __rsvpEdit(rsvp, index) {
    const {id, first_name, last_name, email, dietary_restrictions, attending, updated_at} = rsvp;

    // Pre-render with existing information
    let yesButtonClass;
    let noButtonClass;
    if (attending === true) {
      yesButtonClass = "btn btn-primary";
      noButtonClass = "btn btn-default";
    } else if (attending === false) {
      yesButtonClass = "btn btn-default";
      noButtonClass = "btn btn-primary";
    } else {
      yesButtonClass = "btn btn-default";
      noButtonClass = "btn btn-default";
    }

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
              <Button className={yesButtonClass} style={{float: "left", marginRight: "10px"}} onClick={this.__yes.bind(this, id)}>Joyfully Accept</Button>
              <Button className={noButtonClass} onClick={this.__no.bind(this, id)}>Regretfully Decline</Button>
            </div>
            <div style={{width: "75%"}}>
              <div>Any Dietary Restrictions?</div>
              <form>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder={dietary_restrictions}
                  onChange={this.__handleDietTextChange.bind(this, id)}
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
        <div className="container" style={{textAlign: "center", fontSize: "25px"}}>
          <div>Thank you for RSVPing!</div>
          <br/>
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
        <div className="rsvps container" style={{textAlign: "center"}}>
          <Button style={{marginLeft: "20px"}} bsStyle="primary" onClick={this.__submitRsvps.bind(this)}>Submit your RSVP!</Button>
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
      <div style={{textAlign: "center", fontSize: "20px"}}>
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
      <div style={{textAlign: "center", fontSize: "25px"}}>
        Please submit your RSVP by <strong>June 15th</strong>. Thank you!
      </div>
    )
  }

  __doneRsvp() {
    return (
      <div style={{textAlign: "center", fontSize: "25px"}}>
        Thanks for submitting your RSVP!
      </div>
    )
  }

  __emptyContainer() {
    return (
      <div style={{height: "450px"}}></div>
    )
  }

  render() {
    const {rsvps, rsvpFetchFail, rsvpEdit, rsvpDone} = this.state;
    let content = this.__emptyContainer();
    let searchContent = this.__emptyContainer();
    let bottomContent = null;

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
        searchContent = this.__foundRsvpContent();
      } else if (rsvpDone) {
        content = this.__doneRsvp();
        searchContent = null;
      } else {
        // Just show the rsvp
        content = this.__showRsvps();
        searchContent = null;
      }
    } else {
      searchContent = this.__findRsvpContent();
    }

    if (rsvpDone) {
      content = this.__doneRsvp();
      searchContent = null;
      bottomContent = this.__emptyContainer();
    }

    if (rsvpFetchFail) {
      searchContent = this.__showFetchRsvpFail();
      content = this.__findRsvpContent();
      bottomContent = this.__emptyContainer();
    }

    return(
      <div className="rsvp-page rsvpBG">
        <div className="text-center">
          <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Find your RSVP</h1>
          <hr/>
        </div>
        {searchContent}
        <br/>
        {content}
        {bottomContent}
      </div>
    )
  }
}

export default RsvpPage
