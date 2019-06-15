import React from 'react';
import { Button, Panel, Glyphicon, Label } from 'react-bootstrap'

import $ from 'jquery'

class PhotosPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgHeight: "100%",
      photos: [
        "hike.jpg",
        "lying_on_flowers.jpg",
        "japan_lake.jpg",
        "bear.jpg",
        "lulu.jpg",
        "hanbok2.jpg",
        "hanbok1.jpg",
        "halfdome.jpg",
        "paintnight.jpg",
        "family.jpg",
        "wolf_lick.jpg",
        "castle.jpg",

      ],
      correctOrder: [
        "halfdome.jpg",
        "wolf_lick.jpg",
        "hike.jpg",
        "castle.jpg",
        "japan_lake.jpg",
        "family.jpg",
        "paintnight.jpg",
        "bear.jpg",
        "hanbok2.jpg",
        "hanbok1.jpg",
        "lulu.jpg",
        "lying_on_flowers.jpg",
      ],
      currentOrder: [],
      successful: false,
      huntStart: false,
      photosData: {
        "halfdome.jpg": {"date": "August 15, 2015", "time": "3:29 PM", "location": "Top of Half Dome, Yosemite", "description": "We had just climbed the cables to the peak of Half Dome. The hike started at 6am and ended at 11pm."},
        "wolf_lick.jpg": {"date": "July 27, 2017", "time": "11:26 AM", "location": "Anacortes Wolf Sanctuary, Washington", "description": "Eugene was deemed 'not-tasty' and was allowed to live."},
        "hike.jpg": {"date": "September 9, 2017", "time": "2:39 PM", "location": "Alamere Falls, California", "description": "Hiking with some friends up to a rare tidefall, a waterfall that flows directly into the ocean."},
        "castle.jpg": {"date": "September 22, 2017", "time": "11:04 AM", "location": "Osaka Castle, Osaka, Japan", "description": "What you see in the picture is but a small portion of the entire castle grounds."},
        "japan_lake.jpg": {"date": "September 24, 2017", "time": "10:20 AM", "location": "Tokyo, Japan", "description": "We toured a Japanese Garden in Japan. It was expansive and very beautiful."},
        "family.jpg": {"date": "November 10, 2017", "time": "4:19 PM", "location": "Our apartment", "description": "Our family portrait. The backdrop is our blanket held up by a friend."},
        "paintnight.jpg": {"date": "November 22, 2017", "time": "9:56 PM", "location": "Our apartment", "description": "Our attempt at painting. Do you recognize what we are trying to replicate?"},
        "bear.jpg": {"date": "September 10, 2018", "time": "1:02 PM", "location": "Myeongdong, Seoul, South Korea", "description": "We are at the Line store. Line, a popular messaging app in Asia, has for some reason several storefronts and sells random cute things."},
        "hanbok2.jpg": {"date": "September 14, 2018", "time": "2:12 PM", "location": "Seoul, South Korea", "description": "We dressed up for a traditional korean photo shoot. We are in the yard of a traditional styled house."},
        "hanbok1.jpg": {"date": "September 14, 2018", "time": "4:47 PM", "location": "Seoul, South Korea", "description": "Just sitting at a table. This was after we had come back from the outdoor shoot."},
        "lulu.jpg": {"date": "July 14, 2018", "time": "8:26 PM", "location": "Maryland", "description": "All dressed up for a friend's wedding!"},
        "lying_on_flowers.jpg": {"date": "March 24, 2019", "time": "3:45 PM", "location": "Table Mountain, California", "description": "Trying to copy those instagram photos. Did it work? Do we look cool?"},
      },
      nextPhotoIndex: 0,
    };
  }

  __checkArray(arr1, arr2) {
    let result = true;
    arr1.map((el, index) => {
      if (el === arr2[index]) {
        result = true;
      } else {
        result = false;
        return result
      }
    });
    return result
  }

  __clickPhoto(photo, index, target) {
    const {currentOrder, correctOrder} = this.state;

    let newOrder = currentOrder;
    let step = currentOrder.length + 1;
    newOrder.push(photo);

    if (this.__checkArray(newOrder, correctOrder.slice(0, step))) {
      // Correct next photo click

      this.setState({
        currentOrder: newOrder
      });

      target.target.parentElement.style.background = "black";

      // Check if finished
      if (step === correctOrder.length) {
        localStorage.setItem('tiffanyandeugenehuntstart', true);
        this.setState({
          successful: true,
          bgHeight: "100vh"
        });
      }
    } else {
      this.setState({
        currentOrder: []
      });

      $( ".photo-panel" ).each(function( index ) {
        this.style.background = "white";
      });
    }
  }

  __photoContainer(photo, index) {
    const {photosData} = this.state;

    const data = photosData[photo];
    const {date, time, location, description} = data;

    let idName = `photo-container-${index}`;

    return (
      <div className="" key={index} style={{float: "left", width: "25%", margin: "25px"}}>
        <Panel className="" id={idName} style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
          <Panel.Body className="photo-panel" style={{fontSize: "18px", fontStyle: "italic"}}>
            <img src={require(`./../../assets/images/${photo}`)} width="100%" onClick={this.__clickPhoto.bind(this, photo, index)}/>
            <div className="photo-data">
              <div style={{marginTop: "15px", fontSize: "14px"}}>
                {location}
              </div>
              <div style={{marginTop: "1px", fontSize: "8px"}}>
                {date}
              </div>
              <div style={{marginTop: "10px", fontSize: "10px"}}>
                {description}
              </div>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }

  __photoCorrectContainer(index) {
    const {correctOrder, successful} = this.state;

    if (!successful) {
      return null
    }

    let photo = correctOrder[index];

    if (photo === undefined) {
      // Finished showing correct order of photos

      return (
        <div className="div-center" style={{textAlign: "center", width: "30%"}}>
          <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
            <Panel.Body className="" style={{fontSize: "18px", fontStyle: "italic"}}>
              <h2 style={{marginBottom: "15px"}}>The Hunt Begins</h2>
              <img src={require(`./../../assets/images/spirited_away_baby_mouse.png`)} width="50%"/>
            </Panel.Body>
          </Panel>
        </div>
      )
    } else {
      setTimeout(() => {
        this.setState({
          nextPhotoIndex: index + 1
        })
      }, 900);

      return (
        <div>
          <div className="" style={{fontSize: "18px", textAlign: "center", marginBottom: "10px"}}>
            <Label>Congratulations! You've successfully clicked on all the photos in the correct order of when we took them!</Label>
          </div>
          <div key={index} className="div-center" style={{textAlign: "center", width: "30%"}}>
            <Panel style={{background: "white", boxShadow: "lightgrey 5px 1px 7px"}}>
              <Panel.Body className="" style={{fontSize: "18px", fontStyle: "italic"}}>
                <img src={require(`./../../assets/images/${photo}`)} width="100%"/>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      )
    }
  }

  render() {
    const {photos, correctOrder, successful, nextPhotoIndex, bgHeight} = this.state;

    let successfulClassName = "container hidden";
    let regularClassName = "photos container";

    if (successful) {
      successfulClassName = "photos successful container";
      regularClassName = "hidden";
    }

    return(
      <div className="photos-page" style={{background: "whitesmoke", height: {bgHeight}}}>
        <h1 className="title-header" style={{textAlign: "center", paddingTop: "20px", marginTop: "0px"}}>Photos</h1>
        <hr/>

        <br/>

        <div className={regularClassName}>
          {photos.map((photo, index) => {
            return this.__photoContainer(photo, index)
          })}
        </div>

        <div className={successfulClassName}>
          {this.__photoCorrectContainer(nextPhotoIndex)}
        </div>

        <br/>
        <br/>

      </div>
    )
  }
}

export default PhotosPage
