import { useState } from "react";
import EditReservationForm from "./EditReservationForm";
function ReservationCard({reservation,handleCancel,onUpdateReservation}){
 
 
  const{ name, date, time, num, contact, occasion}=reservation;
  const [isEditing, setIsEditing] = useState(false);
  const handleReservationUpdate = (updatedReservation) => {
    setIsEditing(false);
    onUpdateReservation(updatedReservation);
  };

  function handleDeleteClick() {
    fetch(`/reservations/${reservation.id}`, {
     method: "DELETE",
       })
     handleCancel(reservation.id)
  }

  
    return(
        <>
        {isEditing ?( <EditReservationForm reservation={reservation}  onUpdateReservation={handleReservationUpdate} />) :(
           <div>
           <h2>{name}</h2>
           <h2>{date}</h2>
           <h2>{time}</h2>
           <h2>{num}</h2>
           <h2>{contact}</h2>
           <h2>{occasion}</h2>
           <h3>For-{reservation.restaurant.name}</h3>
           <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              Edit
            </button>
            <button onClick={handleDeleteClick}>Cancel Booking</button>
           </div>

        )}
       
       
      </>
    )
}
export default ReservationCard;


  //  {/* <a href={`/reservations/${reservation.id}/update`}>Edit</a> */}
      
  //      {/* <button  >Modify Booking</button>
  //      <Link to={`/myreservations/${reservation.id}`}>Modify Booking</Link> */}
  //       {/* <Link to={`/reservations/${reservation.id}/update`}>Edit</Link> */}
  //       {/* <button onClick={()=>{
  //         setCurrent(reservation)
  //       }} >Edit</button> */}