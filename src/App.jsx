import React from 'react';
import ExpenseItem from './components/expenses/ExpenseItem.jsx';

const App = () => (<>
  <ExpenseItem
    title="닭강정"
    price={8000}
    date={new Date(2025, 7, 13)}
  />
  <ExpenseItem
    title={'아이스크림'}
    price={5000}
    date={new Date(2025, 8, 12)}
  />
  <ExpenseItem
    title="이펙티브 자바"
    price={30000}
    date={new Date(2025, 6, 5)}
  />
</>);

export default App;
