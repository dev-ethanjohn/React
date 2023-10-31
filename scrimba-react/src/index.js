import React from 'react';
import ReactDOM from 'react-dom';

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

PART 2:

- Add a `header` element with a nested `nav` element. Inside the `nav`, include a `img` element with the image of the React logo and make sure to set the width to something more manageable so it doesn't take up the whole screen. 
- Add an `h1` w/ some text describing the page.
- Add a `footer` after the list that says: "© 20xx <last name here> development. All rights reserved."


Move the `header` element from Hero into 
its own component called "Header"
 */

// CHILDREN
function Header() {
  return (
    <header>
      <nav>
        <img src="/images/react.png" alt="react logo" width="200px" />
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons why React is a must-have JS library</h1>
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

const root = document.getElementById('root');
ReactDOM.render(<Hero />, root);
