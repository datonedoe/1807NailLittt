import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddedItem extends Component {
  state = {};

  render() {
    const { id, name, price } = this.props;
    return (
      <div className="row">
        <div className="col-2">#{id}</div>
        <div className="col-6">{name}</div>
        <div className="col-4 text-right">{price}</div>
      </div>
    );
  }
}

AddedItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default AddedItem;
