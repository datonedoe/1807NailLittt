import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PaymentModal extends Component {
  state = {};

  render() {
    const { amountAfterTax } = this.props;
    return (
      <div
        data-backdrop="static"
        data-keyboard="false"
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        ariaLabelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                PAYMENT CONFIRMATION
              </h5>
            </div>
            <div className="modal-body">${amountAfterTax}</div>
            <div className="modal-footer">
              <button
                style={{ height: 100, fontSize: 30 }}
                type="button"
                className="btn btn-primary px-4"
              >
                CONFIRM
              </button>
              <button
                style={{ height: 100, fontSize: 30 }}
                type="button"
                data-dismiss="modal"
                className="btn btn-danger px-4"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PaymentModal.propTypes = {
  amountAfterTax: PropTypes.number.isRequired,
};

const mapStateToProps = ({ checkout }) => ({
  amountAfterTax: checkout.amountAfterTax,
});
export default connect(
  mapStateToProps,
  {},
)(PaymentModal);
