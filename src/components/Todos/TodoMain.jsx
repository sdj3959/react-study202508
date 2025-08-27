import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({todoList, onDeleteTodo,onCheckTodo}) => {

  return (
    <ul className={styles['todo-list']}>
      {todoList.map((item) => (
        <TodoItem key={item.id} id={item.id} textInput={item.text} done={item.done} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo} />
      ))}
    </ul>
  );
};

export default TodoMain;
