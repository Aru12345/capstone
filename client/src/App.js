
import './App.css';
import { Routes, Route } from "react-router-dom";

import TimesSquare from './components/TimesSquare';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <Routes>
         
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/"  element={<TimesSquare />} />
      </Routes>
      

    </div>
  );
}

export default App;
