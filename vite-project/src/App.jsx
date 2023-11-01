import { useState } from 'react';

//components
import Main from './components/Main.jsx';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
