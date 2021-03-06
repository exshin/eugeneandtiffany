import React from 'react';
import { Button, Table } from 'react-bootstrap'

import BootstrapTable from 'react-bootstrap-table-next';

import $ from 'jquery'

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvps: [],
      activeTab: 1,
      tiffanyHighScores: [],
      eugeneHighScores: [],
      latestTiedScores: [],
      tobyScores: [],
      blocksScores: [],
      huntProgress: [],
    };
  }

  componentDidMount() {
    this.__fetchRsvps();
  }

  //* FETCH EVENTS
  __fetchRsvps() {
    $.ajax({
      type: "GET",
      url: "/rsvp/index",
      data: {},
      dataType: "json",
      complete: this.__handleFetchRsvps.bind(this)
    });
  }

  __handleFetchRsvps(result) {
    if (result && result.responseJSON) {
      this.setState({
        rsvps: result.responseJSON.rsvps
      })
    }
  }

  __fetchQuizScores() {
    $.ajax({
      type: "GET",
      url: "/quiz/all_scores",
      data: {},
      dataType: "json",
      complete: this.__handleFetchQuizScores.bind(this)
    });
  }

  __handleFetchQuizScores(result) {
    if (result && result.responseJSON) {
      if (result && result.responseJSON) {
        this.setState({
          tiffanyHighScores: result.responseJSON.tiffany_scores,
          eugeneHighScores: result.responseJSON.eugene_scores,
          latestTiedScores: result.responseJSON.latest_tied_high_scores
        });
      }
    }
  }

  __fetchTobyScores() {
    $.ajax({
      type: "GET",
      url: "/toby_game/high_scores",
      data: {},
      dataType: "json",
      complete: this.__handleFetchTobyScores.bind(this)
    });
  }

  __handleFetchTobyScores(result) {
    if (result && result.responseJSON) {
      if (result && result.responseJSON) {
        this.setState({
          tobyScores: result.responseJSON.high_scores
        });
      }
    }
  }

  __fetchBlocksHighScores() {
    $.ajax({
      type: "GET",
      url: "/blocks/high_scores",
      data: {},
      dataType: "json",
      complete: this.__handleBlocksHighScoreSuccess.bind(this)
    });
  }

  __handleBlocksHighScoreSuccess(result) {
    if (result && result.responseJSON) {
      this.setState({
        blocksScores: result.responseJSON.high_scores
      })
    }
  }

  __fetchHuntProgress() {
    $.ajax({
      type: "GET",
      url: "/hunts/index",
      data: {},
      dataType: "json",
      complete: this.__handlefetchHuntProgress.bind(this)
    });
  }

  __handlefetchHuntProgress(result) {
    if (result && result.responseJSON) {
      if (result && result.responseJSON) {
        this.setState({
          huntProgress: result.responseJSON.hunts
        });
      }
    }
  }
  //

  //* CONTENT CONTAINERS
  __rsvpsPage() {
    const {rsvps} = this.state;
    const columns = [{
      dataField: "id",
      text: "ID",
      sort: true
    }, {
      dataField: "first_name",
      text: "First Name",
      sort: true
    }, {
      dataField: "last_name",
      text: "Last Name",
      sort: true
    }, {
      dataField: "email",
      text: "Email",
      sort: true
    }, {
      dataField: "dietary_restrictions",
      text: "Dietary Restrictions",
      sort: true
    }, {
      dataField: "attending",
      text: "Attending",
      sort: true
    }, {
      dataField: "updated_at",
      text: "Updated At",
      sort: true
    }];

    let totalYes = 0;
    rsvps.map(r => {
      if (r.attending === true) {
        totalYes += 1
      }
    });
    let totalNo = 0;
    rsvps.map(r => {
      if (r.attending === false) {
        totalNo += 1
      }
    });
    const total = rsvps.length;

    return (
      <div>
        <h3>Rsvps</h3>
        <div className="container">
          <div style={{float: "left"}}>Yes: {totalYes}</div>
          <div style={{float: "left", marginLeft: "20px"}}>No: {totalNo}</div>
          <div style={{float: "left", marginLeft: "20px"}}>Total Replied: {totalYes + totalNo} / {total}</div>
        </div>
        <hr/>
        <BootstrapTable keyField='id' data={ rsvps } columns={ columns } />
      </div>
    )
  }

  __QuizScoresPage() {
    const {tiffanyHighScores, eugeneHighScores, latestTiedScores} = this.state;
    const tiffanyColumns = [{
      dataField: "id",
      text: "ID",
      sort: true
    }, {
      dataField: "name",
      text: "Name",
      sort: true
    }, {
      dataField: "tiffany_score",
      text: "Score",
      sort: true
    }, {
      dataField: "created_at",
      text: "Created Date",
      sort: true
    }];
    const eugeneColumns = [{
      dataField: "id",
      text: "ID",
      sort: true
    }, {
      dataField: "name",
      text: "Name",
      sort: true
    }, {
      dataField: "eugene_score",
      text: "Score",
      sort: true
    }, {
      dataField: "created_at",
      text: "Created Date",
      sort: true
    }];
    const tiedColumns = [{
      dataField: "id",
      text: "ID",
      sort: true
    }, {
      dataField: "name",
      text: "Name",
      sort: true
    }, {
      dataField: "tiffany_score",
      text: "Tiffany Score",
      sort: true
    }, {
      dataField: "eugene_score",
      text: "Eugene Score",
      sort: true
    }, {
      dataField: "created_at",
      text: "Created Date",
      sort: true
    }];

    return (
      <div>
        <h3>Eugene and Tiffany Scores</h3>

        <div className="container">
          <div className="container" style={{float: "left", width: "30%"}}>
            <h4>Top "You Are A Tiffany" Scores</h4>
            <BootstrapTable keyField='id' data={ tiffanyHighScores } columns={ tiffanyColumns } />
          </div>

          <div className="container" style={{float: "left", width: "30%"}}>
            <h4>Top "You Are A Eugene" Scores</h4>
            <BootstrapTable keyField='id' data={ eugeneHighScores } columns={ eugeneColumns } />
          </div>

          <div className="container" style={{float: "left", width: "30%"}}>
            <h4>Top "Tied" Scores</h4>
            <BootstrapTable keyField='id' data={ latestTiedScores } columns={ tiedColumns } />
          </div>
        </div>
      </div>
    )
  }

  __TobyScoresPage() {
    const {tobyScores} = this.state;
    const columns = [{
      dataField: "id",
      text: "ID",
      sort: true
    }, {
      dataField: "name",
      text: "Name",
      sort: true
    }, {
      dataField: "score",
      text: "Score",
      sort: true
    }, {
      dataField: "created_at",
      text: "Created Date",
      sort: true
    }];


    return (
      <div>
        <h3>Toby Game Scores</h3>
        <div className="container">
        </div>
        <BootstrapTable keyField='id' data={ tobyScores } columns={ columns } />
      </div>
    )
  }

  __BlocksScoresPage() {
    const {blocksScores} = this.state;
    const columns = [{
      dataField: "id",
      text: "ID",
      sort: true
    }, {
      dataField: "name",
      text: "Name",
      sort: true
    }, {
      dataField: "score",
      text: "Score",
      sort: true
    }, {
      dataField: "created_at",
      text: "Created Date",
      sort: true
    }];


    return (
      <div>
        <h3>Blocks Game Scores</h3>
        <div className="container">
        </div>
        <BootstrapTable keyField='id' data={ blocksScores } columns={ columns } />
      </div>
    )
  }

  __HuntProgressPage() {
    const {huntProgress} = this.state;
    const columns = [{
      dataField: "id",
      text: "ID",
      sort: true
    }, {
      dataField: "name",
      text: "Name",
      sort: true
    }, {
      dataField: "progress",
      text: "Progress",
      sort: true
    }, {
      dataField: "updated_at",
      text: "Updated Date",
      sort: true
    }];

    return (
      <div>
        <h3>The Hunt Progress</h3>
        <div className="container">
        </div>
        <BootstrapTable keyField='id' data={ huntProgress } columns={ columns } />
      </div>
    )
  }


  //

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

    switch (eventKey) {
      case 1:
        this.__fetchRsvps();
        break;
      case 2:
        this.__fetchQuizScores();
        break;
      case 3:
        this.__fetchTobyScores();
        break;
      case 4:
        this.__fetchBlocksHighScores();
        break;
      case 5:
        this.__fetchHuntProgress();
        break;
      default:
        break
    }
  }

  render() {
    const { activeTab } = this.state;
    let content;
    let buttonName1 = "default";
    let buttonName2 = "default";
    let buttonName3 = "default";
    let buttonName4 = "default";
    let buttonName5 = "default";

    switch (activeTab) {
      case 1:
        content = this.__rsvpsPage();
        buttonName1 = "primary";
        break;
      case 2:
        content = this.__QuizScoresPage();
        buttonName2 = "primary";
        break;
      case 3:
        content = this.__TobyScoresPage();
        buttonName3 = "primary";
        break;
      case 4:
        content = this.__BlocksScoresPage();
        buttonName4 = "primary";
        break;
      case 5:
        content = this.__HuntProgressPage();
        buttonName5 = "primary";
        break;
      default:
        break;
    }

    return(
      <div className="admin-page container">
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Admin Center</h1>
        <hr/>

        <br/>

        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="travel-nav-buttons">
              <div>
                <Button bsStyle={buttonName1} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 1)}>Rsvps</Button>
              </div>
              <div>
                <Button bsStyle={buttonName2} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 2)}>Eugene Tiffany Quiz Scores</Button>
              </div>
              <div>
                <Button bsStyle={buttonName3} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 3)}>Toby Game Scores</Button>
              </div>
              <div>
                <Button bsStyle={buttonName4} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 4)}>Blocks Game Scores</Button>
              </div>
              <div>
                <Button bsStyle={buttonName5} style={{float: "left"}} onClick={this.__handleSelect.bind(this, 5)}>The Hunt Progress</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {content}
        </div>
      </div>
    )
  }
}

export default AdminPage
