import React from "react";
import { RentalCard } from "./RentalCard";

import { Container, Row, Col } from "reactstrap";

export class RentalList extends React.Component {
  renderRentals() {
    return this.props.rentals.map((rental, id) => {
      return <RentalCard key={id} rental={rental} />;
    });
  }
  render() {
    return <Col lg="6" md="12">{this.renderRentals()}</Col>;
  }
}
