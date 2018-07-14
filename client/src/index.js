import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Components
import Appointment from './components/AppointmentModule/Appointment';
import NavBar from './components/NavBar';
import Checkout from './components/CheckoutModule/Checkout';
import Login from './components/LoginModule/Login';
import Register from './components/RegisterModule/Register';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Login} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/register" component={Register} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
