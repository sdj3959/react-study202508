import React, { useState } from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({id, textInput, done, onDeleteTodo, onCheckTodo}) => {

  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle} = styles;

  const [isChecked, setIsChecked] = useState(done);

  const removeItem = () => {
    onDeleteTodo(id);
  }

  const onCheck = () => {
    onCheckTodo(id);
    setIsChecked(!isChecked);
  }

  return (
    <li className={itemStyle}>
      <div className={`${styles['check-circle']} ${done ? styles['active'] : ''}`} onClick={onCheck}>
        <MdDone />
      </div>
      <span className={`${styles['text']} ${isChecked ? styles['finish'] : ''}`}>{textInput}</span>
      <div className={styles['remove']} onClick={removeItem}>
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
