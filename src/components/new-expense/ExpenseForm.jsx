import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  // 입력값을 상태관리
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);

  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // form 제출 이벤트
  const handleSubmit = e => {
    e.preventDefault();
    // console.log('form이 제출됨!');
    const payload = { title, price, date };

    console.log(payload);

    // 입력창 초기화
    /*
      input태그에다가 값을 입력하면 -> 상태변수에 저장됨  (단방향)
      상태변수의 값을 바꾸면 -> input이 갱신된다?  (X)    (양방향)
     */
    setTitle('');
    setPrice(0);
    setDate(null);

  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onInput={e => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onInput={e => setPrice(+e.target.value)}
            value={price || ''}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getTodayDate()}
            onInput={e => setDate(e.target.value)}
            value={date ?? ''}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
