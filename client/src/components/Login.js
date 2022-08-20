import "./Login.css"


import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { headers} from "./Globals";


function Login({loginUser,loggedIn}){
  const navigate = useNavigate()
 
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

 useEffect(()=>{
if(loggedIn){
  navigate("/home")
}
 },[loggedIn])
 
const handleSubmit=e=>{
  e.preventDefault();

  const strongParams={
   
      email,
      password
   
    }

  fetch('/login', {
    method:"POST",
    headers,
    body: JSON.stringify(strongParams)

  })
  .then(resp=>resp.json())
  .then(data=>{
    loginUser(data.user)
   
    localStorage.setItem('jwt',data.token)
    navigate('/home');
  })

}

    return(
        <>
        <h1 >Big Apple Traveller🗽</h1>
        <h2>Login form</h2>
        <div>

<form onSubmit={handleSubmit}>
<div>
  
  <label htmlFor="email">Email:</label>
  <input type="text" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
  </div>
  <div>
  <label htmlFor="password">Password:</label>
  <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} />
  </div>
  <input type="submit" value="login" />
</form>
</div>

    
        
   </>
    )
}
export default Login;




