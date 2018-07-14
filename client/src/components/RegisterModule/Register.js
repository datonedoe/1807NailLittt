import React, { Component } from 'react';

class Register extends Component {
  state = {}

  render() {
    return (
      <div>
        <div><strong>REGISTER INFO</strong></div>
        <div>DATE: {Date.now()}</div>
        <div>NUMBER OF TRANSACTIONS: <span>20</span></div>
        <div>NUMBER OF SERVICES: <span>800</span></div>
        <hr />
        <div>AMOUNT COLLECTED in CASH: $50000</div>
        <div>AMOUNT COLLECTED in CREDIT: $50000</div>
        <div>AMOUNT COLLECTED in DEBIT: $50000</div>
        <div>TOTAL AMOUNT COLLECTED: $100000</div>
      </div>
    );
  }
}

export default Register;
