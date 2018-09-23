import React from "react";
import { RentalList } from "./RentalList";
import { connect } from "react-redux";
import { ListingHeader } from "./ListingHeader";
import { GeneralMap } from "./GeneralMap";

import { Container, Row, Col } from "reactstrap";

import * as actions from "actions";

class RentalListing extends React.Component {
  componentWillMount(props) {
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rental-listing">
        <div className="landing-background_2" />
        <div className="main">
          <Row>{/* <ListingHeader /> */}</Row>
          <Row>
            <RentalList rentals={this.props.rentals} />
            <GeneralMap rentals={this.props.rentals} />
          </Row>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  };
}

export default connect(mapStateToProps)(RentalListing);
