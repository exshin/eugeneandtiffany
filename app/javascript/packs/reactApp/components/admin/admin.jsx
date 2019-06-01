import React from 'react';
import { Button, Table } from 'react-bootstrap'

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalYes: 0,
      totalNo: 0,
      total: 0
    }
  }


  __click() {
    debugger;
  }

  render() {
    const {totalYes, totalNo, total} = this.state;

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
