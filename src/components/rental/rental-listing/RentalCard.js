import React from 'react';
import { Link } from 'react-router-dom';
import { rentalType } from 'helpers';

export function RentalCard(props) {
  const rental = props.rental;

  return (
    <div className="col-12 card-row">
      <Link className='rental-detail-link' to={`/rentals/${rental._id}`}>
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={rental.image} alt={rental.title} />
          </div>
          <div className="col-md-6 pad-15">
            <h6 className={rental.category}>{rentalType(rental.shared)} Apartment</h6>
            <h4>{rental.title}</h4>

            <div className="row">
              <div className="col-6">
                <p>
                  Guests: {rental.guests}
                </p>
                <p>
                  Bedrooms: {rental.bedrooms}
                </p>
                <p>
                  Bathrooms: {rental.bathrooms}
                </p>
                <p>
                  Bed: {rental.bed}
                </p>
              </div>
              <div className="col-6">
                <p>
                  Bed linen and towels
                </p>
                <p>
                  Equiped Kitchen
                </p>
                <p>
                  Wifi &amp; TV
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <div className="price-box">
              <p>
                {rental.dailyRate} &euro;
             </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
// {/* <div className='card bwm-card'>
//   <img className='card-img-top' src={rental.image} alt={rental.title}></img>
//   <div className='card-block'>
//     <h6 className={`card-subtitle ${rental.category}`}>{rentalType(rental.shared)} {rental.category} &#183; {rental.city}</h6>
//     <h4 className='card-title'>{rental.title}</h4>
//     <p className='card-text'>${rental.dailyRate} per Night &#183; Free Cancelation</p>
//   </div>
// </div> */}