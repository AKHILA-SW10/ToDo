import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginForm from './Login/LoginForm';
import ToDo from './ToDo/ToDo';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  const trigger=()=>{
    setisLoggedIn(!isLoggedIn);
  }

  return (
    <div className='App'>
      {!isLoggedIn?<img src="TaskOrganizer.png"/>:<div/>}
      {!isLoggedIn ? <LoginForm trigger={trigger}/> : <ToDo/>}
    </div>
  );
}
export default App;
