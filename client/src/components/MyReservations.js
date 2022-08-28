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

      // console.log("reservations",reservations)
      function handleUpdateReservation(updatedReservation) {
        const updatedReservations = reservations.map((reservation) =>{
        return reservation.id === updatedReservation.id ? updatedReservation : reservation;
         } );
        setReservations(updatedReservations);
      }
      function handleCancel(reservationtodelete){
        const newReservations=reservations.filter(r=>r.id !== reservationtodelete)
         setReservations(newReservations)
         
       }


     
    return(
        <>
       
        {reservations.map((reservation)=>(
        <ReservationCard key={reservation.id} reservation={reservation} handleCancel={handleCancel} handleUpdateReservation={handleUpdateReservation} />
        
       ))

       }
        </>
    )
}
export default MyReservations;