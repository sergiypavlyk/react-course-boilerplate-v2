import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" className={({ isActive }) => isActive ? 'is-active' : ''} exact="true">Dashboard</NavLink>
    <NavLink to="/create" className={({ isActive }) => isActive ? 'is-active' : ''}>Create Expanse</NavLink>
    <NavLink to="/edit" className={({ isActive }) => isActive ? 'is-active' : ''}>Edit Expanse</NavLink>
    <NavLink to="/help" className={({ isActive }) => isActive ? 'is-active' : ''}>Help</NavLink>
  </header>
)

export default Header;
