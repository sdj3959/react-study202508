import React, {useState, useRef} from 'react';
import styles from './AddUsers.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ErrorModal from "../ui/Modal/ErrorModal.jsx";

const AddUsers = ({ onAddUser }) => {

  // 입력값들을 상태관리
  // const [userValue, setUserValue] = useState({
  //   username: '',
  //   age: '',
  // });

  // useRef로 태그 기억시키기
  const usernameRef = useRef();
  const ageRef = useRef();

  // 에러가 났을 때 에러데이터를 관리할 상태변수
  // error -> {title: 에러제목, message: 에러원인}
  const [error, setError] = useState(null);

  // const handleName = (e) => {
  //   setUserValue({
  //     ...userValue,
  //     username: e.target.value,
  //   });
  // };
  // const handleAge = (e) => {
  //   setUserValue({
  //     ...userValue,
  //     age: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // input태그 꺼내기
    const $usernameInput = usernameRef.current;
    const $ageInput = ageRef.current;

    const userValue = {
      username: $usernameInput.value,
      age: $ageInput.value,
    }

    // 입력값 검증
    if (!userValue.username.trim()) {
      // 에러처리
      setError({
        title: '유효하지 않는 입력값',
        message: '이름은 필수 입력값입니다.'
      });
      return;
    }
    if (+userValue.age < 1) {
      // 에러처리
      setError({
        title: '유효하지 않은 나이 범위',
        message: '나이는 0또는 음수가 될 수 없습니다.'
      });
      return;
    }

    onAddUser({
      ...userValue,
      id: Math.random().toString(),
    });

    // setUserValue({
    //   username: '',
    //   age: '',
    // });

    $usernameInput.value = '';
    $ageInput.value = '';

    $usernameInput.focus();
  };


  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onClose={()=>setError(null)} />}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>이름</label>
          <input
            id='username'
            type='text'
            // value={userValue.username}
            // onInput={handleName}
            ref={usernameRef}
          />
          <label htmlFor='age'>나이</label>
          <input
            id='age'
            type='number'
            ref={ageRef}
            // value={userValue.age}
            // onInput={handleAge}
          />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
