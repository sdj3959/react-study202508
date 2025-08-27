import React, { useState } from 'react';
import CourseList from "./components/CourseGoals/CourseList.jsx";
import CourseInput from "./components/CourseGoals/CourseInput.jsx";
import './App.css';

const App = () => {
  // 목표데이터들의 묶음배열
  // goals라는 이름의 배열에 목표들을 저장해요. 목표는 id와 text(목표 내용)로 이루어져 있어요.
  const [goals, setGoals] = useState([
    {
      id: Math.random().toString(), // 첫 번째 목표의 id
      text: '리액트 공부하기', // 첫 번째 목표의 내용
    },
    {
      id: Math.random().toString(), // 두 번째 목표의 id
      text: '스프링 복습하기', // 두 번째 목표의 내용
    },
  ]);

  // 목표 추가 함수
  // 새로운 목표를 입력하면 이 함수가 실행돼요.
  // 입력한 목표를 배열 맨 앞에 추가해요.
  const addGoalHandler = (enteredText) => {
    setGoals((prev) => [
      ...prev, // 기존 목표들도 그대로 남겨둬요.
      { id: Math.random().toString(), text: enteredText }, // 새로운 목표를 만들어서 추가해요.
    ]);
  };

  // 목표 삭제 함수
  // 목표를 클릭하면 이 함수가 실행돼요.
  // 클릭한 목표의 id와 같은 목표만 배열에서 빼고 다시 저장해요.
  const deleteGoalHandler = (goalId) => {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== goalId));
  };

  return (
    <div>
      <section id='goal-form'>
        {/* 목표를 입력하는 입력창이에요. 목표를 추가하는 함수를 전달해요. */}
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        {/* 목표 리스트와 삭제 함수 전달. 목표 목록을 보여주고, 클릭하면 삭제돼요. */}
        <CourseList goals={goals} onDeleteGoal={deleteGoalHandler} />
      </section>
    </div>
  );
};

export default App;
