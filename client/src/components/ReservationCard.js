import { Link } from "react-router-dom";
function ReservationCard({reservation,reservations,setReservations}){
    const{ id, name, date, time, num, contact, occasion}=reservation;

    function handleCancel(reservationtodelete){
        const newReservations=reservations.filter(r=>r.id !== reservationtodelete)
         setReservations(newReservations)
         
       }
       function handleDeleteReservations() {
        fetch(`/reservations/${reservation.id}`, {
          method: "DELETE",
        })
          handleCancel(reservation.id)
      }
    
    return(
        <>
     
        <h2>{name}</h2>
        <h2>{date}</h2>
        <h2>{time}</h2>
        <h2>{num}</h2>
        <h2>{contact}</h2>
        <h2>{occasion}</h2>
        <h3>For-{reservation.restaurant.name}</h3>
   
        <button onClick={handleDeleteReservations}>Cancel</button>
        </>
    )
}
export default ReservationCard;