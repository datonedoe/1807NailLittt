import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddedItem from './AddedItem';
import PaymentButtons from './PaymentButtons';
import Pricing from './Pricing';
import './PaymentPanel.css';

class PaymentPanel extends Component {
  render() {
    return (
      <div id="payment-panel">
        <div id="addedItemList">
          {/* All added items */}
          {this.props.items.map(item => <AddedItem {...item} />)}
        </div>
        {/* Total payment/pricing */}
        <Pricing />
        {/* Payment button */}
        <PaymentButtons />
      </div>
    );
  }
}

PaymentPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = ({ checkout }) => ({
  items: checkout.items,
});

export default connect(
  mapStateToProps,
  {},
)(PaymentPanel);
