import React, { Component } from 'react';
import { MapWithGeocode } from '../../map/GoogleMap';

export class GeneralMap extends Component {
  render() {
    const location = this.props.location;
    const style = {
      marginLeft: '10px'
    }
    return (
      <div className="col-7 general-map">
        <MapWithGeocode
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXufe52FObBfoT3bMTG7iP4Ye8laj7wZQ&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%`, marginLeft: `10px` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          location={location}
          style={style}
        />
      </div>
    )
  }
}