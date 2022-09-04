import { createContext } from "react";
import { useState } from "react";

 export  const Cont =createContext();


function ContProvider({children}){
   const [user, setUser] = useState(null);
   const[reviews,setReviews]=useState([]);

   return <Cont.Provider value={{user,setUser,reviews,setReviews}}>

      {children}
   </Cont.Provider>
}

export default ContProvider;