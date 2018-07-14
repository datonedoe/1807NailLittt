import React, { Component } from 'react';
import NumPad from '../helpers/NumPad';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <NumPad />
          </div>
          <div className="col-md-6">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
