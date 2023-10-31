import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';

// COMPONENTS
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

// CHILDREN

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
