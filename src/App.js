import React from 'react';

import './global.css'
import Header from './components/Header/index.js';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes></Routes>
    </div>
  );
}

export default App;
