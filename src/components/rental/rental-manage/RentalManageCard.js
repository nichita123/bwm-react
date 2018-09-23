import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toUpperCase, pretifyDate } from '../../../helpers';


export class RentalManageCard extends Component {

  render() {
    const { rental, modal } = this.props;

    return (
      <div className='col-md-4 col-sm-6'>
        <div className='card text-center'>
        <img class="card-img-top" src={rental.image} alt="Card image cap" />
          <div className='card-block'>
            <h4 className='card-title'>{rental.title} - {toUpperCase(rental.city)}</h4>
            <Link className='btn btn-bwm' to={`/rentals/${rental._id}`}>Go to Rental</Link>

            {rental.bookings && rental.bookings.length > 0 &&
              modal
            }

          </div>
          <div className='card-footer text-muted'>
            Created at {pretifyDate(rental.createdAt)}
          </div>
        </div>
      </div>
    )
  }
}