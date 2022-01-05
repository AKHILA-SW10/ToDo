import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginForm from './Login/LoginForm';
import ToDo from './ToDo/ToDo';

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userName,setUserName]=useState('Dear Guest');

  const trigger=()=>{
    setisLoggedIn(!isLoggedIn);
  }
  const getUser=(user)=>{
      setUserName(user);
  }

  return (
    <div className='App'>
      {!isLoggedIn?<img src="TaskOrganizer.png"/>:<div/>}
      {!isLoggedIn ? <LoginForm trigger={trigger} getUser={getUser}/> : <ToDo user={userName}/>}
    </div>
  );
}
export default App;
