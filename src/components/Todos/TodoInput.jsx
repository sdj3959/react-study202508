import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({onAddTodo}) => {

  const [isOpen, setIsOpen] = useState(false);

  const {
    'form-wrapper': wrapper,
    'insert-form': insertForm,
    'insert-btn': insertBtn,
    open: openStyle,
  } = styles;

  const onSubmit = (e) => {
    e.preventDefault();
    const input = e.target[0];
    const value = input.value.trim();
    if (value) {
      onAddTodo(value);
      input.value = '';
    }
  };

  const openInput = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={wrapper}>
        <form className={insertForm} onSubmit={onSubmit} style={{ display: isOpen ? 'block' : 'none' }}>
          <input
            type='text'
            placeholder='할 일을 입력 후, 엔터를 누르세요!'
          />
        </form>
      </div>
      <button
        className={`${insertBtn} ${isOpen ? openStyle : ''}`}
        onClick={openInput}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
