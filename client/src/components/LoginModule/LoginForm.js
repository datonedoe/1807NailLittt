import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { clearStdInOut } from '../../actions/stdinoutActions';

class LoginForm extends Component {
  state = {
    employeeId: '',
    employeePin: '',
    employeeIdReceiving: false,
    employeePinReceiving: false,
  };

  listenForEmployeeId = async () => {
    const employeePin = this.props.stdin;
    await this.props.clearStdInOut();
    this.setState({
      employeePin,
      employeeIdReceiving: true,
      employeePinReceiving: false,
    });
  };

  listenForEmployeePin = async () => {
    const employeeId = this.props.stdin;
    await this.props.clearStdInOut();
    this.setState({
      employeeId,
      employeeIdReceiving: false,
      employeePinReceiving: true,
    });
  };

  attemptToClockIn = () => {
    const employeePin = this.props.stdin;
    this.props.history.push('/checkout');
    this.setState(
      {
        employeePin,
      },
      () => console.log('this.state', this.state),
    );
  };

  render() {
    const { employeeId, employeePin } = this.state;
    return (
      <div className="container mx-5">
        <div className="row">
          <div className="col">
            <div>EMPLOYEE ID</div>
            <button
              type="button"
              onClick={() => this.listenForEmployeeId()}
              className="btn btn-lg btn-secondary btn-block py-3"
            >
              {this.state.employeeIdReceiving
                ? `${this.props.stdin}|`
                : this.state.employeeId || 'EMPLOYEE ID'}
            </button>
            <hr />
            <div>PIN</div>
            <button
              type="button"
              onClick={() => this.listenForEmployeePin()}
              className="btn btn-lg btn-secondary btn-block py-3"
            >
              {/*
                  {this.state.employeePinReceiving ? this.props.stdin : 'PIN NUMBER'}
                */}
              {this.state.employeePinReceiving
                ? `${this.props.stdin}|`
                : this.state.employeePin || 'PIN NUMBER'}
            </button>
            <button
              type="submit"
              onClick={() => this.attemptToClockIn()}
              className="btn btn-block btn-primary py-4 mt-5"
            >
              CLOCK IN
            </button>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  stdin: PropTypes.string.isRequired,
  clearStdInOut: PropTypes.func.isRequired,
};

const mapStateToProps = ({ stdinout }) => ({
  stdin: stdinout.stdin,
});

export default withRouter(
  connect(
    mapStateToProps,
    { clearStdInOut },
  )(LoginForm),
);
