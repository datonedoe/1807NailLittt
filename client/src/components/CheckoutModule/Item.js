import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToCheckout } from '../../actions/checkoutActions';

class Item extends Component {
  render() {
    const { itemInfo, btn } = this.props;
    return (
      <button className={`btn ${btn} text-uppercase`} type="button" onClick={() => this.props.addItemToCheckout(itemInfo)}>
        {itemInfo.name}
      </button>
    );
  }
}

Item.propTypes = {
  itemInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  addItemToCheckout: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addItemToCheckout },
)(Item);
