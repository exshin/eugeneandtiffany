import React from 'react'

class ColorTile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      turn: "player"
    };
  }



  render() {
    let markerClass;
    let moveMark;

    return (
      <div className="empty-square" onClick={ this.playerMove }>
        <div className={ markerClass }>
          { moveMark }
        </div>
      </div>
    )
  }

}

export default ColorTile
