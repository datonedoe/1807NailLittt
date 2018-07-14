import React, { Component } from 'react';
import './PaymentButtons.css';

class PaymentButtons extends Component {
  state = {};

  render() {
    return (
      <div className="row" id="payment-buttons">
        <div className="col-md-4">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            className="btn btn-block btn-success"
          >
            CREDIT
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            className="btn btn-block btn-success"
          >
            DEBIT
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            className="btn btn-block btn-success"
          >
            CASH
          </button>
        </div>
      </div>
    );
  }
}

export default PaymentButtons;
