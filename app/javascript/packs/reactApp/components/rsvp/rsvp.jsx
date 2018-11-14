import React from 'react';
import { Button } from 'react-bootstrap'

class RsvpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvps: []
    }
  }

  __click() {
    debugger;
  }

  __handleFindRSVP() {
    $.ajax({
      type: "GET",
      url: "/quiz/high_scores",
      data: {},
      dataType: "json",
      complete: this.__rsvpSuccess.bind(this)
    });
  }

  __rsvpSuccess(result) {
    if (result && result.responseJSON) {
      this.setState({
        rsvps: result.responseJSON.tiffany_scores
      })
    }
  }

  __handleTextChange(e) {
    this.setState({ submitName: e.target.value });
  }

  render() {
    return(
      <div className="rsvp-page container">
        <h1>Find your RSVP</h1>
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Enter your name to find your RSVP</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              onChange={this.__handleTextChange.bind(this)}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  this.__handleFindRSVP();
                }
              }}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        <Button bsStyle="primary" onClick={this.__handleFindRSVP.bind(this)}>Submit</Button>
      </div>
    )
  }
}

export default RsvpPage
