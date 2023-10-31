import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src="/images/react.png" alt="react logo" id="react-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
