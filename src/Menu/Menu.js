import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <Link to='/history'>
        <div className="nav-block block1">
          <h4>H</h4>
          <h6>History</h6>
        </div>
      </Link>
      <Link to='/skills'>
        <div className="nav-block block2">
          <h4>S</h4>
          <h6>Skills</h6>
        </div>
      </Link>
      <Link to='/projects'>
        <div className="nav-block block3">
          <h4>P</h4>
          <h6>Projects</h6>
        </div>
      </Link>
      <Link to="/goals">
        <div className="nav-block block4">
          <h4>G</h4>
          <h6>Goals</h6>
        </div>
      </Link>
      <Link to='/about'>
        <div className="nav-block block5">
          <h4>A</h4>
          <h6>About</h6>
        </div>
      </Link>
    </nav>
  );
}

export default Menu;