import "./Login.css"


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let navigate = useNavigate();

  
    return(
        <div id="login" >
          <h1 className="heading">Big Apple Traveller🗽</h1>
          <Box
      sx={{
        width: 500,
        height: 500,
        backgroundColor: 'white',
        marginLeft:48,
        borderRadius:3,
      
        
      }}
    >
  <Box mt={2} padding={1}>
        <h3 className="cac">Sign In</h3>
        </Box>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
         <TextField
          required
          id="outlined-required"
          label="Email"
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          
        />

    </Box>
    <Button variant="contained"
    sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
    >Log In</Button>

<Box component="span" sx={{ p: 2 }}>
    <h3 className="headingbottom">Dont have an account? Sign Up</h3>
<Button variant="contained"   sx={{ mt: 0.5, mb: 2, backgroundColor: "black" }} onClick={() => navigate("/signup")}>Create an Account</Button>
    </Box>
        

    </Box>
    
       
      </div>
       
    )
}
export default Login;