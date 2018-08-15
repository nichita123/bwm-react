import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { PromiseProvider } from 'mongoose';
import { connect } from 'react-redux';

class Header extends Component {

  constructor(){
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout();
    this.props.history.push('/');
  }

  renderAuthButtons() {
    const { isAuth } = this.props.auth;

    if (isAuth) {
      return (
        <div className="nav col-lg-2 col-md-12 d-flex justify-content-around">
          <li className="nav-item">
            <a className='nav-link' onClick={this.handleLogout}>Logout</a>
          </li>
        </div>
      )
    }
    return (
      <div className="nav col-lg-2 col-md-12 d-flex justify-content-around">
        <li className="nav-item">
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
      <nav className='navbar fixed-top navbar-light bg-light navbar-expand-lg'>
        <Link className='navbar-brand' to='/'><img src={Logo} alt="Logo" /></Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-between' id='navbarNavAltMarkup'>
          <div className="navbar-nav width-100 justify-content-center">
              <div className='nav col-lg-10 col-md-12  d-flex justify-content-center'>
                <li className="nav-item margin-l">
                  <Link className='nav-link' to='/rentals'>Appartments</Link>
                </li>
                <li className="nav-item  margin-l">
                  <Link className='nav-link' to='#'>Appartments</Link>
                </li>
                <li className="nav-item  margin-l">
                  <Link className='nav-link' to='#'>Trips</Link>
                </li>
                <li className="nav-item  margin-l">
                  <Link className='nav-link' to='#'>Contact</Link>
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
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(Header));
