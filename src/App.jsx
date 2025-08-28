import React, {useState} from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers.jsx';
import UserList from './components/Users/UserList.jsx';
import MainHeader from './components/SideEffect/MainHeader.jsx';
import Home from './components/SideEffect/Home.jsx';
import Login from './components/SideEffect/Login.jsx';

const App = () => {

  // 로그인 상태 체크
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // 간단한 로그인 검증 로직 (실제 애플리케이션에서는 서버와 통신 필요)
    if (email === 'abc@def.com' && password === '12345678') {
      setIsLoggedIn(true);
    } else {
       alert('로그인 실패!');
    }
  }

  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={handleLogin}/>}
      </main>
    </>
  );
};

export default App;
