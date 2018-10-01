import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toUpperCase, pretifyDate } from "../../../helpers";
import { deleteRental } from "./../../../actions/index";

export class RentalManageCard extends Component {
  constructor() {
    super();

    this.state = {
      wantDelete: false
    };

    this.showDeleteMenu = this.showDeleteMenu.bind(this);
    this.closeDeleteMenu = this.closeDeleteMenu.bind(this);
    this.deleteRental = this.deleteRental.bind(this);
  }

  showDeleteMenu() {
    this.setState({
      wantDelete: true
    });
  }

  closeDeleteMenu() {
    this.setState({
      wantDelete: false
    });
  }

  deleteRental(rentalId, rentalIndex) {
    this.setState({
      wantDelete: false
    });

    this.props.deleteRentalCB(rentalId, rentalIndex);
  }

  render() {
    const { rental, modal, rentalIndex } = this.props;
    const { wantDelete } = this.state;

    const deleteClass = wantDelete ? "to-be-deleted" : "";

    return (
      <div className="col-md-4 col-sm-6">
        <div className={`card text-center ${deleteClass}`}>
          <img
            className="card-img-top"
            src={rental.image}
            alt="Card image cap"
          />
          <div className="card-block">
            <h4 className="card-title">
              {rental.title} - {toUpperCase(rental.city)}
            </h4>
            <Link className="btn btn-bwm" to={`/rentals/${rental._id}`}>
              Go to Rental
            </Link>

            {rental.bookings && rental.bookings.length > 0 && modal}
          </div>
          <div className="card-footer text-muted">
            Created at {pretifyDate(rental.createdAt)}
            {!wantDelete && (
              <React.Fragment>
                <button
                  onClick={this.showDeleteMenu}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <Link
                  className="btn btn-warning"
                  to={{
                    pathname: `/rentals/${rental._id}`,
                    state: { isUpdate: true }
                  }}
                >
                  Edit
                </Link>
              </React.Fragment>
            )}
            {wantDelete && (
              <div className="delete-menu">
                Do you confirm?
                <button
                  onClick={this.deleteRental.bind(
                    this,
                    rental._id,
                    rentalIndex
                  )}
                  className="btn btn-danger"
                >
                  Yes
                </button>
                <button
                  onClick={this.closeDeleteMenu}
                  className="btn btn-success"
                >
                  No
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
