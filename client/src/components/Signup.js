import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { headers} from "./Globals";


function Signup({loginUser}){
    const navigate = useNavigate();
 const[name,setName]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

const handleSubmit=e=>{
  e.preventDefault();

  const strongParams={
   user:{
      name,
      email,
      password
   }
    }

  

  fetch('/signup',{
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
        <h1 className="heading">Big Apple Traveller🗽</h1>
        <div>
<h2>Create Account</h2>
<form onSubmit={handleSubmit}>
<div>
  <label htmlFor="name">Name:</label>
  <input type="text" name="name" id="name" value={name}  onChange={e=>setName(e.target.value)}/>
  </div>
  <div>
  <label htmlFor="email">Email:</label>
  <input type="text" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
  </div>
  <div>
  <label htmlFor="password">Password:</label>
  <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} />
  </div>
  <input type="submit" value="singup" />
</form>
</div>

    
        
   </>
    )
}
export default Signup;

