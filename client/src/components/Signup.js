import { useState} from "react"

import tsquare from '../mediafiles/tsquare.mp4'

function Signup({onLogin}){
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


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
          <div class="video-container">
    <video autoPlay muted loop id="myVideo">
        <source  src={tsquare} type="video/mp4"/> 
    
     </video>
        <div>
<h2>Create Account</h2>
<form className="tour"  onSubmit={handleSubmit}  >
<div>
<label htmlFor="name" className="form-label thelabel" >Name</label>
        <input
          type="text"
          id="name"
          value={name}
          className="form-control thelabel"
          onChange={(e) => setName(e.target.value)}
        />
  
  <label htmlFor="email" className="form-label thelabel">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          className="form-control thelabel"
          onChange={(e) => setEmail(e.target.value)}
          
        />
  <label htmlFor="password" className="form-label thelabel">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          className="form-control thelabel"
          onChange={(e) => setPassword(e.target.value)}
       
        />
  </div>
  <button type="submit" className="btn btn-primary">{isLoading ? "Loading..." : "Sign Up"}</button>
</form>

</div>
</div>
        
   </>
    )
}
export default Signup;

