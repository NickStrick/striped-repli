import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import Homepage from './components/Homepage/Hompage.js';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Sidebar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
