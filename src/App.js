import React from 'react';
import './App.css';
import CoinTable from './components/CoinTable';
import News from './components/News';

function App() {

  return (
    <div className="App">
      <News />
      <CoinTable />
    </div>
  );
} 

export default App;
