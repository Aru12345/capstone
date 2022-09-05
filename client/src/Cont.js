import { createContext } from "react";
import { useState } from "react";

 export  const Cont =createContext();


function ContProvider({children}){
   const [user, setUser] = useState(null);
   const[reviews,setReviews]=useState([]);
   const[reservations,setReservations]=useState([]);
   const [showLogin, setShowLogin] = useState(true);
   const [errors, setErrors] = useState([]);

   return <Cont.Provider value={{user,setUser,reviews,setReviews,reservations,setReservations,showLogin,setShowLogin,errors,setErrors}}>

      {children}
   </Cont.Provider>
}

export default ContProvider;