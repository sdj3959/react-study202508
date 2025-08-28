import React, {useEffect, useState} from 'react';
import './App.css';
import MainHeader from './components/SideEffect/MainHeader.jsx';
import Home from './components/SideEffect/Home.jsx';
import Login from './components/SideEffect/Login.jsx';

const App = () => {

  // 로그인 상태 체크
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 토큰 검사
  // console.log('토큰 검사!');
  // const token = localStorage.getItem('token');
  // if (token === '1') {
  //   setIsLoggedIn(true); // 리 렌더링 발생
  // }

  // side effect (서버에서 데이터를 가져오거나 외부 비동기작업) 처리를 위한 훅(리액트 함수)
  useEffect(() => {
    // console.log('useEffect가 실행됨!' );
    const token = localStorage.getItem('token');
    if (token === '1') {
      setIsLoggedIn(true); // 리 렌더링 발생
    }
  },[]);

  const handleLogin = (email, password) => {
    // 간단한 로그인 검증 로직 (실제 애플리케이션에서는 서버와 통신 필요)
    if (email === 'asdf@asdf.com' && password === 'asdf1234') {
      localStorage.setItem('token', '1');
      setIsLoggedIn(true);
    } else {
       alert('로그인 실패!');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <>
      <MainHeader onLogout={handleLogout} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={handleLogin}/>}
      </main>
    </>
  );
};

export default App;
