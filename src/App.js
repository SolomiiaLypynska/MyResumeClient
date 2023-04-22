import './App.css';
import { LandingPage } from './component/LandingPage';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import  {SignUp}  from './component/auth/signUp/SignUp';
import {LogIn} from './component/auth/logIn/LogIn';
import { Account } from './component/account/Account';
import { NavBar } from './component/header/NavBar';

function App() {
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Routes >
      <Route path='/' element={userInfo.token ? <LandingPage/> : <LogIn/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/account' element={<Account/>}/>

      </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
