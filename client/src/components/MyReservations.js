import {useEffect, useState } from "react";
import ReservationCard from "./ReservationCard";
import EditReservationForm from "./EditReservationForm";
function MyReservations({user,reservations,setReservations}){
  const[editMode,setEditForm]=useState(false);
   
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
 const renderReservations=reservations.map((reservation)=>(
  <ReservationCard key={reservation.id} reservation={reservation} handleCancel={handleCancel}  />
 ))

     
    return(
        <> 
        
        {renderReservations} 
        </>
    )
}
export default MyReservations;