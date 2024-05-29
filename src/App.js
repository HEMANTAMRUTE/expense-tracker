import React from 'react'
import './App.css'
import {Header }from './comp/Header.js'
import {Balance} from './comp/Balance.js'
import { IncomeExpenses} from './comp/IncomeExpenses.js'
import {TransactionList} from './comp/TransactionList.js'
import {AddTransaction} from './comp/AddTransaction.js'
import { GlobalProvider } from './comp/GlobalState';

function App() {

  return (
    
    <GlobalProvider>
     <Header/>
     <div className='container'>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>


      
     </div>
      
    </GlobalProvider>
  );
}

export default App;


