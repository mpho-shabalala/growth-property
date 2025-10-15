import React, { useEffect } from 'react';
import M from 'materialize-css';

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
          <a href="/growth-property" className="brand-logo">
            GrowthProperties
          </a>

          {/* Mobile menu toggle */}
          <a href="#" data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          {/* Desktop links */}
          <ul className="right hide-on-med-and-down">
            <li><a href="/growth-property">Home</a></li>
            <li><a href="/growth-property/properties">Properties</a></li>
            <li><a href="/growth-property#">About</a></li>
            <li><a href="/growth-property/contact">Contact</a></li>
          
          </ul>
        </div>
      </nav>

      

      {/* Mobile Sidenav */}
      <ul className="sidenav" id="mobile-menu">
        <li><a href="/growth-property">Home</a></li>
        <li><a href="/growth-property/properties">Properties</a></li>
        <li><a href="#">About</a></li>
        <li><a href="/growth-property/contact">Contact</a></li>
      </ul>

      
    </>
  );
};

export default Header;
