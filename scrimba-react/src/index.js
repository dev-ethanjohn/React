import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';

// CHILDREN
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

function MainContent() {
  return (
    <div>
      <h1 className="head">Reasons why React is a must-have JS library</h1>
      <ol>
        <li>React is versatile and easy to use.</li>
        <li>In demand and the most used JS library.</li>
        <li>Building programs with React is declarative and composable.</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Paguntalan development. All rights reserved.</small>
    </footer>
  );
}

// SKELETON (PARENT)
function Hero() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hero />);
