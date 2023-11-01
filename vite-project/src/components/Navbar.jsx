import React from 'react';
import logo from '../assets/reactjs-icon.png';

function Navbar() {
  return (
    <header>
      <div
        className="header--brand-logo"
        style={{
          width: 28.93,
          height: 28.93,
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'inline-flex',
        }}
      >
        <div style={{ width: 27.69, height: 24.5, position: 'relative' }}>
          <div
            style={{
              width: 5.17,
              height: 5.17,
              left: 11.26,
              top: 9.64,
              position: 'absolute',
              background: '#00D8FF',
            }}
          ></div>
          <div
            style={{
              width: 27.69,
              height: 24.5,
              left: 0,
              top: 0,
              position: 'absolute',
            }}
          >
            <div
              style={{
                width: 27.69,
                height: 10.56,
                left: 0,
                top: 6.97,
                position: 'absolute',
                border: '1.24px #00D8FF solid',
              }}
            ></div>
            <div
              style={{
                width: 16.49,
                height: 24.49,
                left: 5.59,
                top: -0,
                position: 'absolute',
                border: '1.24px #00D8FF solid',
              }}
            ></div>
            <div
              style={{
                width: 16.54,
                height: 24.47,
                left: 5.6,
                top: 0.03,
                position: 'absolute',
                border: '1.24px #00D8FF solid',
              }}
            ></div>
          </div>
        </div>
      </div>
      <h2 className="header--brand-name">ReactFacts</h2>
      <h4 className="nav--title">React Course - Project 1</h4>
    </header>
  );
}

export default Navbar;
