import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"


import Box from '@mui/material/Box';
import { TextField } from "@mui/material";
import { Button} from "@mui/material";
function Signup(){
    let navigate = useNavigate()

  



    return(
        <>
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
        <h3 className="cac">Create an Account</h3>
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
        
          id="outlined-required"
          label="Name"
       
        />
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
    >Sign Up</Button>


<Box component="span" sx={{ p: 2 }}>
    <h3 className="headingbottom">Already have an Account?</h3>
<Button variant="contained"   sx={{ mt: 0.5, mb: 2, backgroundColor: "black" }} onClick={() => navigate("/login")}>Log In</Button>
    </Box>

     

    </Box>
    
        
   </>
    )
}
export default Signup;