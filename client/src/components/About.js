import { useContext } from "react";
import { Cont } from "../Cont";
function About(){
    const {user}=useContext(Cont)
    return(
        <>
        <h1>Welcome {user.name}</h1>
      
        </>
    )
}
export default About;