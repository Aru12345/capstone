import {useEffect } from "react";
import ReservationCard from "./ReservationCard";

function MyReservations({user,reservations,setReservations}){
   
    useEffect(()=>{
        fetch("/reservations")
        .then(res=>res.json())
        .then(reservationData=>{
          setReservations(reservationData)
        })
      },[setReservations])

      // console.log("reservations",reservations)
    
      function handleCancel(reservationtodelete){
        const newReservations=reservations.filter(r=>r.id !== reservationtodelete)
         setReservations(newReservations)
         
       }


     
    return(
        <>
       
        {reservations.map((reservation)=>(
        <ReservationCard key={reservation.id} reservation={reservation} handleCancel={handleCancel}  />
        
       ))

       }
        </>
    )
}
export default MyReservations;