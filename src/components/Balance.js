import React from 'react'

const Balance = ({balance}) => {
  if (!balance) balance = 0.00;
  const fix = balance.toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${fix}</h1>
    </>
  )
}

export default Balance
