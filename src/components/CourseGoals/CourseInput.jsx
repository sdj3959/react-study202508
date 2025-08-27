import React, { useState } from 'react';
import styles from  './CourseInput.module.css';
import Button from '../ui/Button';

const CourseInput = ({onAddGoal}) => {
  // 입력값 상태로 관리해요. 입력창에 글씨를 쓰면 enteredValue에 저장돼요.
  const [enteredValue, setEnteredValue] = useState('');

  // 폼을 제출(버튼 클릭 또는 엔터)하면 실행돼요.
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지!
    if (!enteredValue.trim()) return; // 아무것도 안 썼으면 추가하지 않아요.
    onAddGoal(enteredValue); // 입력한 목표를 App에 알려줘서 추가해요.
    setEnteredValue(''); // 입력창을 다시 비워줘요.
  }

  // 입력창에 글씨를 쓸 때마다 실행돼요.
  const courseChangeHandler = (e) => {
    setEnteredValue(e.target.value); // 입력한 값을 enteredValue에 저장해요.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['form-control']}>
        <label>나의 목표</label>
        {/* 입력창에 글씨를 쓰면 courseChangeHandler가 실행돼요. */}
        <input type='text' value={enteredValue} onChange={courseChangeHandler} />
      </div>
      {/* 버튼을 누르면 목표가 추가돼요. */}
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
