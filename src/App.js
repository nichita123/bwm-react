import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import Header from './components/shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalSearchListing from './components/rental/rental-listing/RentalSearchListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import { RentalCreate } from './components/rental/rental-create/RentalCreate';
import LandingPage from './components/landing/LandingPage';
import Login from './components/auth/login/Login';
import { Register } from './components/auth/register/Register';

import RentalManage from './components/rental/rental-manage/RentalManage';
import BookingManage from './components/booking/booking-manage/BookingManage';


import { ProtectedRoute } from './components/shared/auth/ProtectedRoute';
import { LoggedInRoute } from './components/shared/auth/LoggedInRoute';

import * as actions from 'actions';

import 'App.css';
import Services from './components/services/Services';

const store = require('./reducers').init();

class App extends Component {

  componentWillMount() {
    store.dispatch(actions.checkAuthState());
  }

  logout() {
    store.dispatch(actions.logout());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Header logout={this.logout} />
            <Switch>
              <Route exact path='/' component={LandingPage} />

              <ProtectedRoute
                exact
                path='/rentals'
                component={RentalListing}
              />
              <ProtectedRoute
                exact
                path='/rentals/new'
                component={RentalCreate}
              />
              <ProtectedRoute
                exact
                path='/rentals/manage'
                component={RentalManage}
              />
              <ProtectedRoute
                exact
                path='/rentals/:id'
                component={RentalDetail}
              />
              <ProtectedRoute
                exact
                path='/rentals/:street/aps'
                component={RentalSearchListing}
              />

              <ProtectedRoute
                exact
                path='/rentals/:id/services'
                component={Services}
              />

              <ProtectedRoute
                exact
                path='/bookings/manage'
                component={BookingManage}
              />

              <Route exact path='/login' component={Login} />
              <LoggedInRoute exact path='/register' component={Register} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
