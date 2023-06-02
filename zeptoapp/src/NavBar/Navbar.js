import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='nav'></nav>
     
      <a href="/" className="ZeptoNav" ><h1>ZEPTO</h1></a>
      
      <ul>
        <li>
            <a href="/Pricing">Pricing</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

 // <Router>
      // <div><Link to="/"> Location</Link>
      // <Link to="Search">Search</Link>
      // <Link to="My Account"> My Account</Link>
      // <Link to="My Crat">My Cart</Link>
      // </div>
        
    
    // </Router>
