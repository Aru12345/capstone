
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';

import TimesSquare from './components/TimesSquare';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "BigAppleTraveller🍎";
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me", { credentials: "same-origin" }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);

  if (!user) return <Login error={'please login'} onLogin={setUser} />;

  return (
    <div className="App">
       <Navbar user={user} setUser={setUser} />
      <Routes>
      
      <Route exact path="/home" element={<Home user={user} />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/"  element={<TimesSquare />} />
      </Routes>
      

    </div>
  );
}

export default App;
