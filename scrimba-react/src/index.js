import React from 'react';
import ReactDOM from 'react-dom/client';

const navbar = (
  <nav>
    <h1>Ethan React App</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

// ReactDOM.render(navbar, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root').render(navbar));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(navbar);

// Check
