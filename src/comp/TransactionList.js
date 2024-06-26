import React, { useContext } from 'react';
import { Transaction } from '../comp/Transaction.js';

import { GlobalContext } from '../comp/GlobalState.js';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
