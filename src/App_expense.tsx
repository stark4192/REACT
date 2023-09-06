import React from 'react'
import ExpenseList from './expense-tracker/components/ExpenseList'
import { useState } from 'react'
import ExpenseFilter from './expense-tracker/components/ExpenseFilter'
import ExpenseForm from './expense-tracker/components/ExpenseForm'
import categories from './expense-tracker/categories'

function App_expense() {

    const [selectedCategory,setSelectedCategory] = useState('')
    const [expenses,setExpenses] = useState([
        {id:1, description:'aaa', amount:10, category:'Utilities'},
        {id:2, description:'aba', amount:10, category:'Groceries'},
        {id:3, description:'bba', amount:10, category:'Entertainment'},
        {id:4, description:'aab', amount:10, category:'Utilities'}
    ])

    const visibleExpenses = selectedCategory ? expenses.filter(e=>e.category===selectedCategory): expenses

  return (
    <div>
      <div className='mb-5'>
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id:expenses.length+1 }])}/>
      </div>
      <div className='mb-3'>
        <ExpenseFilter onSelectCategory={category=>setSelectedCategory(category)}></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses} 
        onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id!==id))}
      />
    </div>
  )
}

export default App_expense