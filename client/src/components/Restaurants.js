import MyMap from "./MyMap";
import Rcard from "./Rcard";
import { useEffect, useState } from "react";
function Restaurants(){
    const[restaurants,setRestaurants]=useState([]);
    useEffect(()=>{
        fetch('/restaurants')
        .then(res=>res.json())
        .then(rdata=>{
            setRestaurants(rdata)
        })
    },[])
    return(
        <>
        <MyMap />
        <h1>Restos</h1>
        {
            restaurants.map((restaurant)=>(
                <Rcard key={restaurant.id} restaurant={restaurant}/>
            ))
        }

        </>
    )
}
export default Restaurants;