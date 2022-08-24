import "./Login.css"

import tsquare from '../mediafiles/tsquare.mp4'
import "./TimesSquare.css";

import { useState} from "react"


function Login({onLogin}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    

    return(
        <>
      <div class="video-container">
    <video autoPlay muted loop id="myVideo">
        <source  src={tsquare} type="video/mp4"/> 
    
     </video>
     
     <form  className="tour" onSubmit={handleSubmit} >

  
<div className="mb-3">
        <label htmlFor="email"  className="form-label thelabel" >Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    </div>
  <div>
  <label htmlFor="password"  className="form-label thelabel">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  </div>
  <button type="submit" className="btn btn-primary" >
          {isLoading ? "Loading..." : "Login"}
        </button>
</form>

     </div>
        

    
        
   </>
    )
}
export default Login;



