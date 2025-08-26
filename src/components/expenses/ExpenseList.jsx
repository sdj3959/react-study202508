import React from 'react';
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../ui/Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";

const ExpenseList = ({expenses : expenseList}) => {

  /*
    ExpenseFilter에서 선택한 연도 값을
    이 컴포넌트 ExpenseList로 끌어올려서 콘솔에 출력해보세요.
   */
  const onFilterChange = (filteredYear) => {
    console.log(`선택된 연도: ${filteredYear}`);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter onChangeFilter={onFilterChange} />

    </Card>
  );
};

export default ExpenseList;