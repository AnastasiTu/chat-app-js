import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import './css/style.css';
import Directory from './components/Directory/Directory';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <Sidebar />
        <Directory />
      </div>
    </BrowserRouter>
  );
}

export default App;
