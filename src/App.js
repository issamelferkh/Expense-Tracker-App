import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transactions from './components/Transactions';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance balance={1254}/>
        <IncomeExpenses />
        <Transactions />
      </div>
    </>
  );
}

export default App;
