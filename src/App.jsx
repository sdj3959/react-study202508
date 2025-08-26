import React from 'react';
import ExpenseList from './components/expenses/ExpenseList.jsx';
import NewExpense from "./components/new-expense/NewExpense.jsx";

const App = () => {
  const expenseList = [
    {
      title: '닭강정',
      price: 8000,
      date: new Date(2025, 7, 13)
    },
    {
      title: '호두정과',
      price: 50000,
      date: new Date(2025, 8, 21)
    },
    {
      title: '리팩토링',
      price: 30000,
      date: new Date(2025, 4, 2)
    },
    {
      title: '에어컨',
      price: 1000000,
      date: new Date(2022, 3, 2)
    },
  ];

  // 상향식 데이터 전달을 위해 하위컴포넌트(ExpenseForm)에게 함수 하나를 내려줌
  const onAddExpense = (userInput) => {
    console.log('상향식 데이터 전달용 함수');
    console.log('끌어올려진 데이터: ', userInput);
    expenseList.push(userInput);
    console.log(expenseList);
  };

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenseList}/>
    </>
  );
};

export default App;
