import {useEffect } from "react";
import ReservationCard from "./ReservationCard";

function MyReservations({user,reservations,setReservations}){
   
    useEffect(()=>{
        fetch("/reservations")
        .then(res=>res.json())
        .then(reservationData=>{
          setReservations(reservationData)
        })
      },[])

     
    return(
        <>
       
        {reservations.map((reservation)=>(
        <ReservationCard key={reservation.id} reservation={reservation}  />
        
       ))

       }
        </>
    )
}
export default MyReservations;