import React from 'react';
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = () => {

  const expenseList = [
    {
      title: '닭강정',
      price: 8000,
      date: new Date(2025, 7, 13)
    },
    {
      title: '호두정과',
      price: 5000,
      date: new Date(2025, 8, 21)
    },
    {
      title: '이펙티브 자바',
      price: 30000,
      date: new Date(2025, 4, 2)
    },
  ];

  return (
    <div className='expenses'>
      <ExpenseItem expense={expenseList[0]}/>
      <ExpenseItem expense={expenseList[1]}/>
      <ExpenseItem expense={expenseList[2]}/>
    </div>
  );
};

export default ExpenseList;