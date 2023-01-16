
import { useState } from 'react';
import './App.css';
import { Expenses } from './components/expenses/Expensis';
import { NewExpense } from './components/new-expens/Newexpense';




function App() {

  const [expenses, setExpenses] = useState([
    {
      title:"porsh  ",
      price: "300",
      date: new Date(),
    },
     {
       title:"Зарядник",
       price:"400",
       date: new Date(),
     },
  ])
  const addNewExpenseHandler = (date)=>{

    const updatedExpenses = [...expenses]
    updatedExpenses.push(date)
    setExpenses(updatedExpenses)
  }

  return (
    <div> 
    <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
    <Expenses expenses={expenses}/>
    </div>
  
    
  )
}

export default App;
