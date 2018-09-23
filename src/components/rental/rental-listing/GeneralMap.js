import React, { Component } from "react";
import { MapWithGeocode } from "../../map/GoogleMap";

import { Container, Row, Col } from "reactstrap";

export class GeneralMap extends Component {
  render() {
    const location = this.props.location;
    const style = {
      marginLeft: "10px",
      height: "100%"
    };
    return (
      <Col lg="6" md="12" className="sticky-top on-small-screen" style={{
        maxHeight: '80vh',
        minHeight: '80vh'
      }}>
        <MapWithGeocode
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXufe52FObBfoT3bMTG7iP4Ye8laj7wZQ&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={
            <div style={{ height: `100%` }} />
          }
          containerElement={<div style={style} />}
          mapElement={<div style={{ height: `100%` }} />}
          location={location}
        />
      </Col>
    );
  }
}


