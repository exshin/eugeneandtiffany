/*
// Not implementing this due to high costs


import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '300px'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.325479,
          lng: -122.032760
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDNchsAZ8_zLC6PeJWilQzGtU__jVWSPH8'
})(MapContainer);
*/
