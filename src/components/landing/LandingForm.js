import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import * as moment from 'moment';

export class LandingForm extends Component {

  constructor() {
    super();
    this.dateRef = React.createRef();

    this.state = {
      startAt: '',
      endAt: '',
      guests: ''
    }

    // this.handleApply = this.handleApply.bind(this);
    // this.selectGuests = this.selectGuests.bind(this);
    // this.confirmProposeData = this.confirmProposeData.bind(this);
  }

  // handleApply(event, picker) {
  //   const startAt = picker.startDate.format('Y/MM/DD');
  //   const endAt = picker.endDate.format('Y/MM/DD');
  //   this.dateRef.current.value = `${startAt} to ${endAt}`;

  //   this.setState({
  //     proposedBooking: {
  //       ...this.state.proposedBooking,
  //       startAt,
  //       endAt
  //     }
  //   })
  // }

  // selectGuests(event) {
  //   this.setState({
  //     proposedBooking: {
  //       ...this.state.proposedBooking,
  //       guests: parseInt(event.target.value, 10)
  //     }
  //   })
  // }

  render() {
    // const { startAt, endAt, guests } = this.state.proposedBooking;
    
    return (
      <div className="form-holder" >
        <form className='form-inline my-2 my-lg-0 justify-content-center align-bottom'>
          <DateRangePicker
            opens="center"
            containerStyles={{ display: 'block' }}
            onApply={this.handleApply}
          >
            <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search choose-btn'
              type="button">
              Tue 3 July
            </button>
          </DateRangePicker>
          <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search choose-btn'>Guests</button>
          <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search search-btn' type='submit'>Search</button>
        </form>
      </div>
    )
  }
}
