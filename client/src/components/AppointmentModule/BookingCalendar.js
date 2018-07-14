import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './BookingCalendar.css'
;
class BookingCalendar extends Component {
  state = {};

  render() {
    const { pickedDate } = this.props;
    return (
      <div id="bookingCalendar">
        <div className="h3">BOOKING CALENDAR HERE</div>
        <div className="h4">Date: {pickedDate.toString()}</div>
        <div className="scrollView">
          {['9.00am', '10.00am', '11.00am'].map(eachSlot => (
            <div>
              <button type="button" className="btn btn-block btn-info py-3 my-3">
                {eachSlot}
              </button>
            </div>
          ))}
          {['12.pm', '1.00pm'].map(eachSlot => (
            <div>
              <button type="button" className="btn btn-block btn-dark py-3 my-3">
                {eachSlot}
              </button>
            </div>
          ))}
          {['2.00pm', '3.00pm', '4.00pm', '5.00pm'].map(eachSlot => (
            <div>
              <button type="button" className="btn btn-block btn-info py-3 my-3">
                {eachSlot}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

BookingCalendar.propTypes = {
  pickedDate: PropTypes.string.isRequired,
};

const mapStateToProps = ({ appointment: { pickedDate } }) => ({
  pickedDate,
});

export default connect(
  mapStateToProps,
  {},
)(BookingCalendar);
