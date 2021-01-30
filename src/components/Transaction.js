import React from 'react'

const Transaction = ({text, amount}) => {
  const style = amount < 0 ? "minus" : "plus"

  return (
    <>
      <li className={style}>
        {text} <span>-${amount}</span><button className="delete-btn">x</button>
      </li>
    </>
  )
}

export default Transaction
