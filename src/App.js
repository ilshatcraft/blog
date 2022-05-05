import './App.scss';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import {React,useState} from 'react'; 
import MyButton from './UI/button/MyButton';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {

  const [isAuth,setIsAuth]=useState(localStorage.getItem('isAuth'));
  

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname="/login"
    })
  }

  return <Router >
  <nav className='nav'>
  <Link to="/"> Home</Link>
   
      {!isAuth ? (
      <Link to="/login"> login</Link>
      ): (
        <>
      <Link to="/createpost"> create post</Link>  
      <MyButton className='LogOutButton' onClick={signUserOut}>Log Out</MyButton>
      </>)
      }
      </nav>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
    </Routes>
  </Router>;
}

export default App;
