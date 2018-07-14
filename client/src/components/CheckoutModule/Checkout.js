import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import PaymentPanel from './PaymentPanel/PaymentPanel';
import PaymentModal from './PaymentModal';

class Checkout extends Component {
  state = {};

  render() {
    const {
      manicure, pedicure, waxingLady, waxingMen,
    } = this.props;
    return (
      <div className="container-fluid">
        <PaymentModal />
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="h4">MANICURE</div>
                <div className="row">
                  {manicure.map(eachService => (
                    <div className="col-md-4">
                      <Item btn="btn-primary btn-block px-2 py-4 my-1" itemInfo={eachService} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="h4">PEDICURE</div>
                <div className="row">
                  {pedicure.map(eachService => (
                    <div className="col-md-4">
                      <Item btn="btn-warning btn-block px-2 py-4 my-1" itemInfo={eachService} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="h4">WAXING - LADY</div>
                <div className="row">
                  {waxingLady.map(eachService => (
                    <div className="col-md-4">
                      <Item btn="btn-info btn-block px-2 py-4 my-1" itemInfo={eachService} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="h4">WAXING - MEN</div>
                <div className="row">
                  {waxingMen.map(eachService => (
                    <div className="col-md-4">
                      <Item btn="btn-secondary btn-block px-2 py-4 my-1" itemInfo={eachService} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>Services</div>
            <PaymentPanel />
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {};

const mapStateToProps = ({
  services: {
    manicure, pedicure, waxingLady, waxingMen,
  },
}) => ({
  manicure,
  pedicure,
  waxingLady,
  waxingMen,
});

export default connect(
  mapStateToProps,
  {},
)(Checkout);
