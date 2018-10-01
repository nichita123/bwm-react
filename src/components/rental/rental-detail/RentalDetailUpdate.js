import React, { Component } from "react";
import { RentalAssets } from "./RentalAssets";
import { toUpperCase, rentalType } from "helpers";
import EditableInput from "../../shared/editable/EditableInput";
import EditableTextArea from "../../shared/editable/EditableTextArea";

import * as actions from "actions";

export class RentalDetailUpdate extends Component {
  constructor() {
    super();

    this.updateRental = this.updateRental.bind(this);
  }

  updateRental(rentalData) {
    const {
      rental: { _id },
      dispatch
    } = this.props;

    this.props.dispatch(actions.updateRental(_id, rentalData));
  }

  render() {
    const rental = this.props.rental;

    return (
      <div className="rental">
        <h2 className={`rental-type ${rental.category}`}>
          {rentalType(rental.shared)} {rental.category}
        </h2>

        <EditableInput
          entity={rental}
          entityField={"title"}
          className={"rental-title"}
          updateEntity={this.updateRental}
        />

        <EditableInput
          entity={rental}
          entityField={"city"}
          className={"rental-city"}
          updateEntity={this.updateRental}
        />

        <EditableInput
          entity={rental}
          entityField={"street"}
          className={"rental-street"}
          updateEntity={this.updateRental}
        />

        <div className="rental-room-info">
          <span>
            <i className="fa fa-building" />
            <EditableInput
              entity={rental}
              entityField={"bedrooms"}
              className={"rental-bedrooms"}
              containerStyle={{ display: "inline-block" }}
              updateEntity={this.updateRental}
            />
          </span>
          <span>
            <i className="fa fa-user" />
            <EditableInput
              entity={rental}
              entityField={"guests"}
              className={"rental-guests"}
              updateEntity={this.updateRental}
              containerStyle={{ display: "inline-block" }}
            />
          </span>
          <span>
            <i className="fa fa-bed" />
            <EditableInput
              entity={rental}
              entityField={"bed"}
              className={"rental-bed"}
              updateEntity={this.updateRental}
              containerStyle={{ display: "inline-block" }}
            />
          </span>
        </div>
        <EditableTextArea
          entity={rental}
          entityField={"description"}
          className={"rental-description"}
          updateEntity={this.updateRental}
          containerStyle={{ display: "inline-block" }}
          rows={6}
          cols={50}
        />
        <hr />
        <RentalAssets />
      </div>
    );
  }
}
