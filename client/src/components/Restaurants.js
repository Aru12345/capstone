import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Restaurants({loggedIn}){
    const navigate=useNavigate()
    useEffect(()=>{
        if(!loggedIn){
            navigate('/home');
        }
    },[loggedIn])
    return(
        <>

            <h1>These r restos</h1>
        </>
    )
}
export default Restaurants;