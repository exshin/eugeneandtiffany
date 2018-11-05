import React from 'react';
import { Button } from 'react-bootstrap'

class AdminPage extends React.Component {
  __click() {
    debugger;
  }

  render() {
    return(
      <div className="admin-page container">
        <h1>Admin Section</h1>
        <Button onClick={this.__click.bind(this)}>Check</Button>
      </div>
    )
  }
}

export default AdminPage
