import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Navbar extends Component {
  state = {
    auth: false
  }

  onLoginClick = (e) => {
    e.preventDefault();
    this.setState({
      auth: true
    })
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.setState({
      auth: false
    })
  }

  render() {
    const { auth } = this.state;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={this.onLogoutClick}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className='nav-link disabled'>Sign Up</a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={this.onLoginClick} className="nav-link">
            Login
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <p className="navbar-brand">Placeholder</p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              </li>
            </ul>
            { auth ? authLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;