import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

export function Header() {
  return (
    <nav className='navbar fixed-top navbar-light bg-light navbar-expand-lg'>
      <Link className='navbar-brand' to='/'><img src={Logo} alt="Logo" /></Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link' to='/rentals'>Appartments</Link>
          <a className='nav-item nav-link' href=''>Services</a>
          <a className='nav-item nav-link' href=''>Trips</a>
          <a className='nav-item nav-link' href=''>Contact</a>
          <a className='nav-item nav-link' href=''>Sign in</a>
        </div>
      </div>
    </nav>
  )
}
