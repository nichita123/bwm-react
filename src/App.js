import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import  Header  from './components/shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import LandingPage from './components/landing/LandingPage';
import Login from './components/auth/login/Login';
import {Register} from './components/auth/register/Register';
import { ProtectedRoute } from './components/shared/auth/ProtectedRoute';
import { LoggedInRoute } from './components/shared/auth/LoggedInRoute';

import * as actions from 'actions';

import 'App.css';

const store = require('./reducers').init();

class App extends Component {

  componentWillMount(){
    store.dispatch(actions.checkAuthState());
  }

  logout(){
    store.dispatch(actions.logout());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Header logout={this.logout} />
              <Route exact path='/' component={LandingPage}/>
              <ProtectedRoute exact path='/rentals' component={RentalListing} />
              <Route  exact path='/rentals/:id' component={RentalDetail} />
              <Route exact path='/login' component={Login} />
              <LoggedInRoute exact path='/register' component={Register} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
