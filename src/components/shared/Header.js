import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { PromiseProvider } from 'mongoose';
import { connect } from 'react-redux';

class Header extends Component {

  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/');
  }

  renderAdminButtons() {
    const { isAdmin } = this.props.admin;

    if (isAdmin) {
      return (
        <React.Fragment>
          <Link className="dropdown-item" to="/rentals/new">Create Rental</Link>
          <Link className="dropdown-item" to="/rentals/manage">Manage Rentals</Link>
        </React.Fragment>
      )
    }
  }

  renderAuthButtons() {
    const { isAuth } = this.props.auth;

    if (isAuth) {
      return (
        <div className="nav col-lg-4 col-md-12 d-flex justify-content-around">
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Owner Section
              </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {this.renderAdminButtons()}
              <Link className="dropdown-item" to="/bookings/manage">Manage Bookings</Link>
            </div>
          </div>
          <li className="nav-item">
            <a className='nav-link'>{this.props.auth.username}</a>
          </li>
          <li className="nav-item">
            <a className='nav-link' onClick={this.handleLogout}>Logout</a>
          </li>
        </div>
      )
    }
    return (
      <div className="nav col-lg-4 col-md-12 d-flex justify-content-around">
        <li className="nav-item ml-auto">
          <Link className='nav-link' to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/register'>Sign up</Link>
        </li>
      </div>
    )
  }

  render() {
    return (
      <nav className='navbar navbar-light sticky-top bg-light navbar-expand-lg'>
        <Link className='navbar-brand' to='/'><img src={Logo} alt="Logo" /></Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-between' id='navbarNavAltMarkup'>
          <div className="navbar-nav width-100">
            <div className='nav col-lg-8 col-md-12  d-flex'>
              <li className="nav-item margin-l">
                <Link className='nav-link' to='/rentals'>Apartments</Link>
              </li>
              <li className="nav-item  margin-l">
                <Link className='nav-link' to='#'>Services</Link>
              </li>
              <li className="nav-item  margin-l">
                <Link className='nav-link' to='#'>Trips</Link>
              </li>
              <li className="nav-item  margin-l">
                <Link className='nav-link' to='/contact'>Contact</Link>
              </li>
            </div>
            {this.renderAuthButtons()}
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    admin: state.admin
  }
}

export default withRouter(connect(mapStateToProps)(Header));
