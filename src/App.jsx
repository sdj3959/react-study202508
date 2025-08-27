import React, {useState} from 'react';
import './App.css';
import TodoTemplate from "./components/Todos/TodoTemplate.jsx";

const App = () => {

  const [ todos, setTodos ] = useState([
    { id: Math.random().toString(), text: '리액트 공부하기', done: false },
    { id: Math.random().toString(), text: '컴포넌트 스타일링 해보기', done: false },
    { id: Math.random().toString(), text: '일정 관리 앱 만들어 보기', done: false },
  ]);

  const onAddTodo = (text) => {
    // 새로운 할 일 추가 로직
    setTodos(prev => [
        ...prev
        , { id: Math.random().toString(), text, done: false }
      ]);

    return todos;
  };

  const onDeleteTodo = (id) => {
    // 할 일 삭제 로직
    setTodos(prev => prev.filter(todo => todo.id !== id));
    return todos;
  };

  // done이 false인 항목의 개수
  const todoCount = todos.filter(todo => !todo.done).length;

  const onCheckTodo = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
    return todos;
  };

  return <TodoTemplate onAddTodo={onAddTodo} todoList={todos} onDeleteTodo={onDeleteTodo} todoCount={todoCount} onCheckTodo={onCheckTodo} />
};

export default App;
