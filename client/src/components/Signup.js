import { useState} from "react"

import tsquare from '../mediafiles/tsquare.mp4'
import { useContext } from "react";
import { Cont } from "../Cont";
function Signup({onLogin}){
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {showLogin,setShowLogin}=useContext(Cont)

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
       email,
        password,
       
      }),
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
          <div>
    {/* <video autoPlay muted loop id="myVideo">
        <source  src={tsquare} type="video/mp4"/> 
    
     </video> */}
        <div>

<form className="tour"  onSubmit={handleSubmit}  >
<h3>Create Account</h3>
<div>
<label htmlFor="name"  >Name</label>
        <input
          type="text"
          id="name"
          value={name}
     
          onChange={(e) => setName(e.target.value)}
        />
  
  <label htmlFor="email" >Email</label>
        <input
          type="text"
          id="email"
          value={email}
          
          onChange={(e) => setEmail(e.target.value)}
          
        />
  <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
         
          onChange={(e) => setPassword(e.target.value)}
       
        />
  </div>
  <button type="submit" >{isLoading ? "Loading..." : "Sign Up"}</button>
</form>
Already have an account? &nbsp;
              <button  className="btn btn-primary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
</div>
</div>
        
   </>
    )
}
export default Signup;

