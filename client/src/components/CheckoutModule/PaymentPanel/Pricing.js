import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Pricing extends Component {
  state = {};

  render() {
    const { amountPreTax, taxAmount, amountAfterTax } = this.props;
    return (
      <div style={{ fontSize: 20 }}>
        <div className="row">
          <div className="col-8">AMOUNT</div>
          <div className="col-4 text-right">{amountPreTax}</div>
        </div>
        <div className="row">
          <div className="col-8">TAX</div>
          <div className="col-4 text-right">{taxAmount}</div>
        </div>
        <div className="row">
          <div className="col-8">
            <strong>TOTAL</strong>
          </div>
          <div className="col-4 text-right">{amountAfterTax}</div>
        </div>
      </div>
    );
  }
}

Pricing.propTypes = {
  amountPreTax: PropTypes.number.isRequired,
  taxAmount: PropTypes.number.isRequired,
  amountAfterTax: PropTypes.number.isRequired,
};

const mapStateToProps = ({ checkout }) => ({
  amountPreTax: checkout.amountPreTax,
  taxAmount: checkout.taxAmount,
  amountAfterTax: checkout.amountAfterTax,
});

export default connect(
  mapStateToProps,
  {},
)(Pricing);
