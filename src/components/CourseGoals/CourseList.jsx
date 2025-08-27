import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({ goals, onDeleteGoal }) => {
  // 목표 리스트를 화면에 보여주는 부분이에요.
  // goals 배열에 있는 목표들을 하나씩 꺼내서 보여줘요.
  // 각 목표를 클릭하면 onDeleteGoal 함수가 실행돼서 삭제돼요.
  return (
    <ul className='goal-list'>
      {goals.map((goal) => (
        // CourseItem은 각각의 목표를 나타내요. 클릭하면 삭제돼요.
        <CourseItem key={goal.id} id={goal.id} text={goal.text} onDelete={onDeleteGoal} />
      ))}
    </ul>
  );
};

export default CourseList;
