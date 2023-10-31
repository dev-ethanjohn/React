import React from 'react';
import ReactDOM from 'react-dom/client';

// function TemporaryName() {
//   return (
//     <div>
//       <img src="/images/react.png" width="40px" alt="react logo" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<TemporaryName />);

//------------------------------------

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Hero() {
  return (
    <div>
      <h1>Reasons why React is so a must have JS library</h1>
      <ol>
        <li>React is versatile and easy to use.</li>
        <li>In demand and most used JS library.</li>
        <li>Building programs with React is declarative and composable</li>
      </ol>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Hero />);
