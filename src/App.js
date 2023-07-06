import React from 'react';
import './assets/styles/App.css';
import Header from './components/header/Header';
import Top from './components/top/Top';

function App() {

  return (
    <div className='app'>
      <Top/>
      <Header/>
    </div>
    
  );
}

export default App;
