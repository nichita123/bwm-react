import React, { Component } from 'react';
import { MapWithGeocode} from '../../map/DetailGoogleMap';

export class RentalMap extends Component {
  render() {
    const location = this.props.location;
    return (
      <MapWithGeocode
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXufe52FObBfoT3bMTG7iP4Ye8laj7wZQ&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
      />
    )
  }
}