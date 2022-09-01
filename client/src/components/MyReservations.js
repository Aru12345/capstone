import {useEffect, useState } from "react";
import ReservationCard from "./ReservationCard";


function MyReservations({user}){
  // const[editMode,setEditForm]=useState(false);
  const[reservations,setReservations]=useState([]);
  useEffect(()=>{
    fetch("/reservations")
    .then(res=>res.json())
    .then(reservationData=>{
      setReservations(reservationData)
    })
  
   },[])
  
      // console.log("reservations",reservations)
      function handleUpdateReservation(updatedReservation) {
        const updatedReservations = reservations.map((reservation) => {
          if (reservation.id === updatedReservation.id) {
            return updatedReservation;
          } else {
            return reservation;
          }
        });
        setReservations(updatedReservations);
      }
    

      function handleCancel(reservationtodelete){
        const newReservations=reservations.filter(r=>r.id !== reservationtodelete)
         setReservations(newReservations)
         
       }
//  const renderReservations=reservations.map((reservation)=>(
//   <ReservationCard key={reservation.id} reservation={reservation} handleCancel={handleCancel}  />
//  ))

const renderReservations=reservations.map((reservation)=>(
  <ReservationCard key={reservation.id} reservation={reservation} handleCancel={handleCancel}  onUpdateReservation={handleUpdateReservation}  />
  ))
  
    return(
        <> 
        {renderReservations}
        </>
    )
}
export default MyReservations;