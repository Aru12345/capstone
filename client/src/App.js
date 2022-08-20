
import './App.css';
import { Route, Routes} from "react-router-dom";
import { useEffect,useState } from 'react';

import TimesSquare from './components/TimesSquare';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { headers ,getToken} from './components/Globals';
import Restaurants from './components/Restaurants';


function App() {
  
  const[currentUser,setCurrentUser]=useState({});
  const[loggedIn,setLoggedIn]=useState(false);

  const loginUser=user=>{
    setCurrentUser(user);
    setLoggedIn(true);
  }
  

  useEffect(() => {
    document.title = "🍎";
  }, []);

useEffect(()=>{
const token=localStorage.getItem("jwt")
if(token && !loggedIn){
  fetch('/getcurrentuser',{
    methos:"GET",
    headers:{
      ...headers,
      ...getToken()
     
    }
  })
  .then(resp=>resp.json())
  .then(user=>loginUser(user))
  
}
},[loggedIn])

const logoutUser=()=>{
  setCurrentUser({})
  setLoggedIn(false)
  localStorage.removeItem("jwt");
}
  return (
    <div className="App">
       {loggedIn? <h1>Hey   loggedIn </h1> :null }
       <Navbar loggedIn={loggedIn} logoutUser={logoutUser}/>
      
     
      <Routes>
      
      <Route path="/home" element={<Home />} />
      <Route exact path="/signup" element={<Signup  loginUser={loginUser} loggedIn={loggedIn}/>} />
      <Route exact path="/login" element={<Login loginUser={loginUser} loggedIn={loggedIn} />} />
      <Route exact path="/restaurants" element={<Restaurants loggedIn={loggedIn} />} />
      <Route exact path="/"  element={<TimesSquare />} />

      </Routes>

    </div>
  );
}

export default App;

/*
  <Routes>
      
      <Route exact path="/home" element={<Home user={user} />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/"  element={<TimesSquare />} />

      </Routes>
  
*/