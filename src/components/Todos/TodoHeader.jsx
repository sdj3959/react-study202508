import React from 'react';
import styles from './scss/TodoHeader.module.scss';

const TodoHeader = ({todoCount}) => {

  const { day, 'tasks-left': left } = styles;

  // 오늘의 날짜를 'xxxx년 x월 xx일' 형식으로 변환
  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // 요일 배열과 오늘의 요일 인덱스
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayOfWeek = new Date().getDay();

  const onLastTodo = () => {

  }

  return (
    <header>
      <h1>{today}</h1>
      <div className={day}>{dayNames[dayOfWeek]}</div>
      <div className={left}>{
       todoCount === 0 ? '할 일들을 모두 끝내셨습니다!' : `할 일 ${todoCount}개 남음`
      }</div>
    </header>
  );
};

export default TodoHeader;
