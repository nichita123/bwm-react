import React from 'react';
import { RentalCard } from './RentalCard';

export class RentalList extends React.Component {

  renderRentals() {
    return this.props.rentals.map((rental, id) => {
      return (
        <RentalCard
          key={id}
          rental={rental}
        />
      )
    });
  }
  render() {
    return (
      <div className="col-5">
        <div className="row">
          {this.renderRentals()}
        </div>
      </div>
    )
  }
}
