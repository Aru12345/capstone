import MyMap from "./MyMap";
import Rcard from "./Rcard";
import Filter from "./Filter";

import { useEffect, useState } from "react";
function Restaurants(){
    const[restaurants,setRestaurants]=useState([]);
    const [filterBy, setFilterBy] = useState("");
    useEffect(()=>{
        fetch('/restaurants')
        .then(res=>res.json())
        .then(rdata=>{
            setRestaurants(rdata)
        })
    },[])

    function handleFilter(e) {
        e.target.value === "All"
          ? setFilterBy("")
          : setFilterBy(e.target.value);
      }

      let displayRestaurants = restaurants;
  if (filterBy) {
    displayRestaurants = displayRestaurants.filter((r) => {
      return r.category >= filterBy;
    });
  }

    return(
        <>
   
        <MyMap />
        <h1>Restos</h1>
        <Filter handleFilter={handleFilter} />
        
        {
            restaurants.map((restaurant)=>(
                <Rcard key={restaurant.id} restaurant={restaurant}/>
            ))
        }

        </>
    )
}
export default Restaurants;