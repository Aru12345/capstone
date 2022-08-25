import { useState } from "react";
import ReservationForm from "./ReservationForm";

function RestaurantInfo({user}){

    
    return(
        <>
        <h1>Resto Info</h1>
    

      <a href="/restaurants"><button>Back</button></a>
      <ReservationForm user={user} />
        </>
    )
}
export default RestaurantInfo;