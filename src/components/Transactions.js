import React, {useState} from 'react';
import Transaction from './Transaction'

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const Submit = (e) => {
    e.preventDefault();
    const newTransaction = {"text": text, "amount": amount};
    setTransactions([...transactions, newTransaction]);
  }

  return (
    <>
      {/* TransactionList */}
      <h3>History</h3>
      <ul id="list" className="list">
        {/* text + amount + style */}
        {transactions.map(transaction => (
          <Transaction text={transaction.text} amount={transaction.amount} />
        ))}
      </ul>

      {/* Add New Transaction */}
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br />(negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" onClick={Submit} >Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
