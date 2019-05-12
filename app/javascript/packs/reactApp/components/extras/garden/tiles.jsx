import React from 'react';
import { Button } from 'react-bootstrap'

class Tiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: "index"
    };

    this.playerClick = this.playerClick.bind(this)
  }

  playerClick() {
    let position = String(this.props.i) + String(this.props.j);
    this.props.clickAdd(position)
  }

  render() {
    const tileName = this.props.tile;

    let imageName;
    switch (tileName) {
      case "e":
        imageName = "dirt.jpg"; // empty
        break;
      case "t":
        imageName = "dirt.jpg"; // tilled
        break;
      case "s":
        imageName = "dirt.jpg"; // seeded
        break;
      case "g":
        imageName = "growth.png"; // growth
        break;
      case "h":
        imageName = "catnip.png"; // harvest
        break;
      case "w":
        imageName = "dirt.jpg"; // weeds
        break;
      case "r":
        imageName = "broken_rocks.jpg"; // broken rocks
        break;
      case "r2":
        imageName = "rocks.jpg"; // rocks
        break;
      default:
        break;
    }

    return (
      <div className="garden-tile">
        <div className="empty-square">
          <div className="" onClick={this.playerClick}>
            <img style={{float: "left"}} src={require(`./../../../assets/images/garden/${imageName}`)} height="75px" width="75px"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Tiles