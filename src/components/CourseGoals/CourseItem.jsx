import React from 'react';
import './CourseItem.css';

const CourseItem = ({ id, text, onDelete }) => {
  // 각각의 목표(리스트 아이템)를 나타내요.
  // 이 줄을 클릭하면 onDelete 함수가 실행돼서 목표가 삭제돼요.
  // id는 어떤 목표인지 구분하는 번호, text는 목표 내용이에요.
  return (
    <li className='goal-item' onClick={() => onDelete(id)}>
      {/* 목표 내용을 화면에 보여줘요. */}
      {text}
    </li>
  );
};

export default CourseItem;
