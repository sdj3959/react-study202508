import React from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const TodoTemplate = ({ onAddTodo, todoList, onDeleteTodo, todoCount, onCheckTodo }) => {

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader todoCount={todoCount} />
      <TodoMain todoList={todoList} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo} />
      <TodoInput onAddTodo={onAddTodo}/>
    </div>
  );
};

export default TodoTemplate;
