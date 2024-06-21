import React from 'react';
import Routing from './routes';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
