import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  useEffect(() => {
    // Initialize sidenav for mobile
    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="blue darken-4">
        <div className="nav-wrapper container">
          {/* Brand */}
          <Link to="/" className="brand-logo">
            GrowthProperties
          </Link>

          {/* Mobile menu toggle */}
          <Link to="#" data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>

          {/* Desktop links */}
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          
          </ul>
        </div>
      </nav>

      

      {/* Mobile Sidenav */}
      <ul className="sidenav" id="mobile-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      
    </>
  );
};

export default Header;
