import React from 'react';
import './App.css';
import CoinTable from './components/CoinTable';
import News from './components/News';
import Trending from './components/Trending';
import Header from './components/Header';

function App() {

  return (
    <div className="App">  
      <Header />
      <Trending />
      <br/><br/>
      <News /> 
      <CoinTable />
    </div>
  );
} 

export default App;
