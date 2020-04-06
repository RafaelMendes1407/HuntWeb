import React from 'react';

import './global.css'
//import api from './services/api';
import Header from './components/Header/index';
import Main from './pages/main/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
