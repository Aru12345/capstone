
import './App.css';

import { useEffect,useState } from 'react';
import About from './components/About'
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Loggin from './components/Loggin';
import { Route,Routes } from 'react-router-dom';
function App() {
  const [user, setUser] = useState(null);
 
 
 
  useEffect(() => {
    document.title = "Nyc";
  }, []);

 
 
  
  useEffect(() => {
    // auto-login
    fetch("/me", { credentials: "same-origin" }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);


  if (!user) return <Loggin error={'please login'} onLogin={setUser} />;
  return (
    <div className="App">
   <Navbar user={user} setUser={setUser} />
   <Routes>

   
      <Route exact path="/restaurants" element={<Restaurants />} />

     <Route exact path="/about" element={<About user={user} />} />

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
    

      </Routes>
        <Navbar  user={user} setUser={setUser} />  
         useEffect(() => {
    // auto-login
    fetch("/me", { credentials: "same-origin" }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
 
  
*/

/*Latest 
import About from './components/About';
import TimesSquare from './components/TimesSquare';
import Restaurants from './components/Restaurants';
  /* <Routes>
    <Route exact path="/about" element={<About  />} />
    <Route exact path="/restaurants" element={<Restaurants />} />
   
    <Route exact path="/"  element={<TimesSquare />} />
    </Routes>

*/