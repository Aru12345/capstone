import { Link } from "react-router-dom";

function ReservationCard({reservation,reservations,setReservations,handleUpdateReservation,handleCancel}){
    const{ id, name, date, time, num, contact, occasion}=reservation;
    
 

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
        {/* <a href={`/reservations/${reservation.id}/update`}>Edit</a> */}

        <Link to={`/reservations/${reservation.id}/update`}>Edit</Link>
        <button onClick={handleDeleteReservations}>Cancel</button>
        </>
    )
}
export default ReservationCard;