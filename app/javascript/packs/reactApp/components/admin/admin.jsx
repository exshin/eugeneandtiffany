import React from 'react';
import { Button, Table } from 'react-bootstrap'

import $ from 'jquery'

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rsvps: [],
      totalYes: 0,
      totalNo: 0,
      total: 0
    };
  }

  componentDidMount() {
    this.__fetchRsvps();
  }


  __click() {
    debugger;
  }

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
    debugger;
    if (result && result.responseJSON) {
      this.setState({
        rsvps: result.responseJSON.rsvps
      })
    }
  }

  render() {
    const {totalYes, totalNo, total, rsvps} = this.state;

    debugger;

    return(
      <div className="admin-page container">
        <h1>For Admins eyes only!</h1>

        <div>
          <h3>Rsvps</h3>
          <div>
            Yes: {totalYes}
            No: {totalNo}
            Total Replied: {totalYes + totalNo} / {total}
          </div>
          <Table striped bordered condensed hover>
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Attending?</th>
              <th>Dietary Restrictions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </Table>
        </div>


      </div>
    )
  }
}

export default AdminPage
