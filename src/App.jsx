import React, {useState} from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers.jsx';
import UserList from './components/Users/UserList.jsx';
import MainHeader from "./components/SideEffect/MainHeader.jsx";

const App = () => {

  return (
    <>
      <MainHeader />
      <Main>
        <Home />
        <Login />
      </Main>
    </>
  );
};

export default App;
