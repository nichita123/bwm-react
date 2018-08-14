import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import { Header } from 'shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import LandingPage from './components/landing/LandingPage';
import Login from './components/auth/login/Login';
import {Register} from './components/auth/register/Register';

import * as actions from 'actions';

import 'App.css';

const store = require('./reducers').init();

class App extends Component {

  componentWillMount(){
    store.dispatch(actions.checkAuthState());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Header />
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/rentals' component={RentalListing} />
              <Route exact path='/rentals/:id' component={RentalDetail} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
