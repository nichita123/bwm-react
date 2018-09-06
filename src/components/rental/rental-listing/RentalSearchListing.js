import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';
import { ListingHeader } from './ListingHeader';
import { GeneralMap } from './GeneralMap';

import * as actions from 'actions';



class RentalSearchListing extends React.Component {

  constructor(){
    super();

    this.state = {
      searchedStreet: ''
    }
  }

  componentWillMount(props) {
    const searchedStreet = this.props.match.params.street;

    this.setState({
      searchedStreet
    })

    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rental-listing">
        <div className="landing-background_2"></div>
        <div className="main">
          <div className="row">
            <h1 className="page-title">Your apartment in {this.props.rentals}</h1>
            <ListingHeader />
            <RentalList rentals={[]} />
            <GeneralMap />
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  }
}

export default (connect())(RentalSearchListing);
