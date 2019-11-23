import React from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap'

import $ from 'jquery'

class SantaPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",
      wishList: {
        1: "", 2: "", 3: "", 4: "", 5: ""
      },
      submitDone: false,
    }
  }


  /// Text Change ////

  __handleNameTextChange(e) {
    let name = e.target.value;
    this.setState({
      name: name
    });
  }

  __handleEmailTextChange(e) {
    let email = e.target.value;
    this.setState({
      email: email
    });
  }

  __handleAddressChange(e) {
    let address = e.target.value;
    this.setState({
      address: address
    });
  }

  __handleWishListTextChange(id, e) {
    const {wishList} = this.state;
    let wishItem = e.target.value;
    let newWishList = wishList;

    newWishList[id] = wishItem;

    this.setState({
      wishList: newWishList
    });
  }




  //// Submit /////

  __submitInfo() {
    // Submit rsvp for each person
    const {name, email, address, wishList} = this.state;

    let textWishList = [];
    let wishItem;

    for (var key in wishList) {
      wishItem = wishList[key];
      if (wishItem !== "") {
        textWishList.push(wishItem);
      }
    }

    let params = {
      name: name,
      email: email,
      address: address,
      wishList: textWishList.toString()
    };

    this.__submit(params);
  }

  __submit(params) {
    // params need to include rsvp id, attending, dietary_restrictions
    $.ajax({
      type: "POST",
      url: "/santa/submit",
      data: params,
      complete: this.__submitSuccessSubmit.bind(this)
    });
  }

  __submitSuccessSubmit() {
    // Successful RSVP submit
    this.setState({
      submitDone: true
    });
  }

  __infoContainer() {
    return (
      <div className="info-container">
        <Panel className="div-center" style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body className="">
            <div className="row">
              <h4 style={{fontSize: "17px", fontStyle: "italic", color: "darkred"}}>Please enter your name, email, address and wish-list to participate!</h4>
            </div>
            <div className="">
              <form role="form">
                <FormGroup controlId="formInlineName">
                  <ControlLabel>Full Name</ControlLabel>{' '}
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleNameTextChange.bind(this)}
                  />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineEmail">
                  <ControlLabel>Email Address</ControlLabel>{' '}
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleEmailTextChange.bind(this)}
                  />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineAddress">
                  <ControlLabel>Mailing Address (Where you want your gift shipped to)</ControlLabel>{' '}
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleAddressChange.bind(this)}
                  />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineWishList">
                  <ControlLabel>Wish List (Optional - Up to 5)</ControlLabel>{' '}
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleWishListTextChange.bind(this, 1)}
                  />
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleWishListTextChange.bind(this, 2)}
                  />
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleWishListTextChange.bind(this, 3)}
                  />
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleWishListTextChange.bind(this, 4)}
                  />
                  <FormControl
                    type="text"
                    inline="true"
                    placeholder=""
                    value={this.state.value}
                    onChange={this.__handleWishListTextChange.bind(this, 5)}
                  />
                </FormGroup>{' '}
              </form>
            </div>
            <br/>
            <div className="submit-container" style={{textAlign: "center"}}>
              <Button style={{marginLeft: "20px"}} bsStyle="primary" onClick={this.__submitInfo.bind(this)}>Sign Up!</Button>
            </div>
          </Panel.Body>
        </Panel>
        <br/>
      </div>
    )
  }

  __doneContainer() {
    return (
      <div className="info-container">
        <Panel className="div-center" style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body className="">
            <div className="">
              Thanks for participating! We will send you an email with your secret santa once everyone has signed up!
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }

  render() {
    const {submitDone} = this.state;

    let infoContainer = this.__infoContainer();
    let imageClass = "";
    if (submitDone) {
      infoContainer = this.__doneContainer();
      imageClass = "invert-img";
    }

    return(
      <div className="santa-page" style={{height: "100vh"}}>
        <div className="text-center" style={{paddingTop: "15px"}}>
          <div className="santa-welcome-text" style={{fontSize: "40px"}}>
            Welcome to Secret Santa 2019!
          </div>
          <hr className="gold-line" style={{width: "100%"}}/>
          <br/>
          <br/>
          <div className="container">
            <div className="container col-md-6" style={{float: "left"}}>
              <img className={imageClass} src={require(`./../../packs/reactApp/assets/images/santa/santa.png`)} width="100%"/>
            </div>
            <div className="container col-md-6" style={{float: "left"}}>
              <div className="row">
                {infoContainer}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SantaPage
