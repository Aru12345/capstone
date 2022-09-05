import { useContext } from "react";
import { Cont } from "../Cont";
import "./stylingfolder/Navbar.css";

import { Button } from "@mui/material";
import { purple } from '@mui/material/colors';
import styled from "@emotion/styled";



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
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
        padding: "15px",
      
      }}
    >

   {/* <Link href="about" underline="none">
   About
</Link> */}

<ColorButton href="/about" variant="contained">About</ColorButton>

<ColorButton  href="/restaurants" variant="contained">Explore</ColorButton>

<ColorButton  href="/myreservations" variant="contained">My Reservations</ColorButton>
<ColorButton href="/blogs" variant="contained">Blogs</ColorButton>
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