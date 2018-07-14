import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookingCalendar from './BookingCalendar';
import { pickDate } from '../../actions/bookingActions';

class Appointment extends Component {
  state = {
    date: new Date(),
    showBigCalendar: false,
  };

  onChange = async (date) => {
    await this.props.pickDate(date);
    this.setState({ date, showBigCalendar: true }, () => console.log(this.state));
  };

  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-4">
            <Calendar onChange={this.onChange} value={this.state.date} />
          </div>
          <div className="col-md-8">{this.state.showBigCalendar && <BookingCalendar />}</div>
        </div>
      </div>
    );
  }
}

Appointment.propTypes = {
  pickDate: PropTypes.func.isRequired,
};

export default connect(
  null,
  { pickDate },
)(Appointment);
