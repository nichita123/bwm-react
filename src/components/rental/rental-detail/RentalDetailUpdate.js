import React, { Component } from "react";
import { RentalAssets } from "./RentalAssets";
import { toUpperCase, rentalType } from "helpers";
import EditableInput from "../../shared/editable/EditableInput";

import * as actions from 'actions';

export class RentalDetailUpdate extends Component {

  constructor(){
    super();

    this.updateRental = this.updateRental.bind(this);
  }

  updateRental(rentalData){
    const {rental: {_id}, dispatch} = this.props;

    this.props.dispatch(actions.updateRental(_id, rentalData));
  }

  render() {
    const rental = this.props.rental;

    return (
      <div className="rental">
        <h1>Update Component</h1>
        <h2 className={`rental-type ${rental.category}`}>
          {rentalType(rental.shared)} {rental.category}
        </h2>

        <EditableInput
          entity={rental}
          entityField={"title"}
          className={"rental-title"}
          updateEntity={this.updateRental}
        />

        <h2 className="rental-city">{toUpperCase(rental.city)}</h2>
        <div className="rental-room-info">
          <span>
            <i className="fa fa-building" />
            {rental.bedrooms} bedrooms
          </span>
          <span>
            <i className="fa fa-user" /> {rental.bedrooms + 4} guests
          </span>
          <span>
            <i className="fa fa-bed" /> {rental.bedrooms + 2} beds
          </span>
        </div>
        <p className="rental-description">{rental.description}</p>
        <hr />
        <RentalAssets />
      </div>
    );
  }
}
