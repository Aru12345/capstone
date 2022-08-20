import { Link } from "react-router-dom";
function Navbar({loggedIn,logoutUser}){
    const loggedOutLinks=()=>{
       return( <ul>
           <li>
               <Link to ="/home">Home </Link>
                <Link to ="/login"> LogIn </Link>
                <Link to ="/signup"> SignUp </Link>
            </li>
         </ul>)
    }

    const handleLogOut =e =>{
        e.preventDefault()
        logoutUser()
    }
    const loggedInLinks=()=>{
        return( <ul>
            <li>
                <Link to ="/home">Home </Link>
                 
             </li>
             <li><Link to="/restaurants">Restaurants</Link></li>
             <li><a href="#" onClick={handleLogOut}> Logout</a></li>
          </ul>)
     }
    return(
        <>
        
         {loggedIn? loggedInLinks():loggedOutLinks()}
        
        </>
    )
}
export default Navbar;