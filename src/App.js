import React from 'react';
import './App.css';
import CoinTable from './components/CoinTable';
import News from './components/News';
import Trending from './components/Trending';
import './components/Styles.css';

function App() {

  return (
    <div className="App">  
      <header>
        <h1>Crypto Checker</h1>
        <hr/>
      </header>
      <Trending />
      <br/><br/>
      <News /> 
      <CoinTable />
    </div>
  );
} 

export default App;
