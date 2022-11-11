import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" className={({ isActive }) => isActive ? 'is-active' : ''} exact="true">Dashboard</NavLink>
    <NavLink to="/create" className={({ isActive }) => isActive ? 'is-active' : ''}>Create Expanse</NavLink>
    <NavLink to="/edit" className={({ isActive }) => isActive ? 'is-active' : ''}>Edit Expanse</NavLink>
    <NavLink to="/help" className={({ isActive }) => isActive ? 'is-active' : ''}>Help</NavLink>
    <button onClick={() => {
      startLogout();
      location.reload();
    }}>Logout</button>  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
