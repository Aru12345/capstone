import { useState,useEffect } from "react";
import ReservationCard from "./ReservationCard";
function MyReservations({user}){
    const[reservations,setReservations]=useState([]);
    useEffect(()=>{
        fetch("/reservations")
        .then(res=>res.json())
        .then(reservationData=>{
          setReservations(reservationData)
        })
      },[])

     
    return(
        <>
        <h1>My Reservations</h1>
        {reservations.map((reservation)=>(
        <ReservationCard key={reservation.id} reservation={reservation} />
        
       ))

       }
        </>
    )
}
export default MyReservations;