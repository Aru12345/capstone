import { useContext } from "react";
import { Cont } from "../Cont";
import "./stylingfolder/Navbar.css";

import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {indigo} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const ColoredButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[500]),
  backgroundColor:indigo[500],
  '&:hover': {
    backgroundColor:indigo[700],
  },
}));


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
function Navbar(){
  const {setUser}=useContext(Cont)
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
   

       return( <>
      
 
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginLeft: "80px",
        marginRight: "40px",
        padding: "28px",
      
      }}
    >

   {/* <Link href="about" underline="none">
   About
</Link> */}

<ColoredButton href="/about" variant="contained">Home</ ColoredButton>

<ColoredButton href="/restaurants" variant="contained">Explore</ColoredButton>

<ColoredButton  href="/myreservations" variant="contained">My Bookings</ColoredButton>
<ColoredButton href="/blogs" variant="contained">Blogs</ColoredButton>
<ColorButton  variant="contained" size="large" onClick={handleLogoutClick}>
        Logout
        </ColorButton>
  {/* <a   href="/about"> About </a> */}
  {/* <a href="/restaurants">  Restaurants </a>
  <a href="/myreservations">My Reservations </a>
  <a href="/blogs">Blogs </a> */}
  {/* <button type="button" className="btn btn-primary logoutbtn"onClick={handleLogoutClick}>Logout</button> */}
</div>


        
  
         
         
         
          
         
        </>
    )
}
export default Navbar;

/* if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
; 

<a className="nav-link nlink" href="/about">  About</a>
  <a className="nav-link nlink" href="/restaurants">Restaurants</a>
  <button type="button" className="btn btn-primary logoutbtn"onClick={handleLogoutClick}>Logout</button>
*/