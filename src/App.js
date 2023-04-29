import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Account } from './component/account/Account';
import { LogIn } from './component/auth/logIn/LogIn';
import { SignUp } from './component/auth/signUp/SignUp';
import { NavBar } from './component/header/NavBar';

export const UserContext = createContext();

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div className="App">

      <BrowserRouter>
        <UserContext.Provider value={{ isLogin: isLogin, setLogin: setLogin }}>
          <NavBar />
          <Routes >
            <Route path='/' element={isLogin ? <Account /> : <LogIn />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/account' element={isLogin && <Account />} />
          </Routes >
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
