import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Profile } from './component/profile/Profile';
import { LogIn } from './component/auth/logIn/LogIn';
import { SignUp } from './component/auth/signUp/SignUp';
import { NavBar } from './component/header/NavBar';

export const UserContext = createContext();

function App() {
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};
  const [isLogin, setLogin] = useState(!!userInfo?.token);
  return (
    <div className="App">

      <BrowserRouter>
        <UserContext.Provider value={{ isLogin: isLogin, setLogin: setLogin }}>
          <NavBar />
          <Routes >
            <Route path='/' element={isLogin ? <Profile /> : <LogIn />} />
            <Route path='/login' element={!isLogin && <LogIn />} />
            <Route path='/signup' element={!isLogin && <SignUp />} />
            <Route path='/profile' element={isLogin && <Profile />} />
          </Routes >
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
