import React, {useState} from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../ui/Card.jsx';
import ExpenseFilter from './ExpenseFilter.jsx';

const ExpenseList = ({ expenses: expenseList }) => {

  const [year, setYear] = useState(new Date().getFullYear().toString());
  /*
      ExpenseFilter에서 선택한 연도 값을
      이 컴포넌트 ExpenseList로 끌어올려서 콘솔에 출력해보세요
   */
  const onFilterChange = (filteredYear) => {
    console.log(`선택된 연도: ${filteredYear}`);
    setYear(filteredYear);
  };

  // 반복문을 통해 컴포넌트 배열을 리턴하는 함수
  // const foo = () => expenseList.map(ex => <ExpenseItem expense={ex} />);

  return (
    <Card className='expenses'>
      <ExpenseFilter onChangeFilter={onFilterChange} />
      {expenseList
        .filter(ex => ex.date.getFullYear().toString() === year)
        .map(ex => <ExpenseItem expense={ex} />)}
    </Card>
  );
};

export default ExpenseList;