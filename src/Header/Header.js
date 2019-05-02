import React from 'react';
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="header-name">
        <h1>LORYN MASON</h1>
        <h3>FULL STACK DEVELOPER</h3>
      </div>
      <nav className='header-nav'>
      <NavLink to='/history'>
        <div className="nav-block block1">
          <h4>H</h4>
          <h6>History</h6>
        </div>
      </NavLink>
      <div className="nav-block block2">
        <h4>S</h4>
        <h6>Skills</h6>
      </div>
      <div className="nav-block block3">
        <h4>P</h4>
        <h6>Projects</h6>
      </div>
      <div className="nav-block block4">
        <h4>G</h4>
        <h6>Goals</h6>
      </div>
      <div className="nav-block block5">
        <h4>A</h4>
        <h6>About</h6>
      </div>
      </nav>
    </header>
  )
}