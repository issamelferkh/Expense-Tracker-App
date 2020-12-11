import React from 'react';
import Header from './com/Header';
import Balance from './com/Balance';
import IncExp from './com/IncExp';
import History from './com/History';
import Transaction from './com/Transaction';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <History />
        <Transaction />
      </div>
    </>
  );
}

export default App;
