import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
  addToStdInOut as _addToStdInOut,
  backspaceStdInOut as _backspaceStdInout,
  clearStdInOut as _clearStdInOut,
} from '../../actions/stdinoutActions';
// Ex: <div className={
// classnames('form-control form-control-lg',
// { 'is-invalid': errors.email })} >
// </div>
import './NumPad.css';

const styles = {
  buttonStyle: {
    height: '120px',
    width: '120px',
    fontSize: 40,
  },
};

const NumPad = ({ addToStdInOut, backspaceStdInOut, clearStdInOut }) => {
  const { buttonStyle } = styles;
  const addToStd = (event) => {
    const { value } = event.target;

    switch (value) {
      case 'C':
        backspaceStdInOut();
        break;

      case 'Clear':
        clearStdInOut();
        break;

      default:
        addToStdInOut(value);
        break;
    }
  };
  return (
    <div>
      <div className="container">
        {[[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 'C', 'Clear']].map((eachThree) => {
          console.log('eachThree', eachThree);
          return (
            <div className="row">
              {eachThree.map(eachKey => (
                <input
                  type="button"
                  style={buttonStyle}
                  className={`btn btn-lg btn-block btn-primary m-2 ${isNaN}`}
                  value={eachKey}
                  onClick={e => addToStd(e)}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

NumPad.propTypes = {
  addToStdInOut: PropTypes.func.isRequired,
  backspaceStdInOut: PropTypes.func.isRequired,
  clearStdInOut: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    addToStdInOut: _addToStdInOut,
    backspaceStdInOut: _backspaceStdInout,
    clearStdInOut: _clearStdInOut,
  },
)(NumPad);
