import { useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ReservationForm({user}){
    const navigate = useNavigate();
    const params = useParams();

    const[reservationData,setReservationData]=useState({
        name:"",
        date:"",
        time:"",
        num:"",
        contact:"",
        occasion:"",
    });
    function handleReservationChange(event){
        setReservationData({
            ...reservationData,
            [event.target.name]: event.target.value,
        })
    }
    function handleReservationSubmit(event){
        event.preventDefault();
        const newReservation={
            ...reservationData,
            restaurant_id: params.id,
            user_id: user.id,
        };

        fetch(`/reservations`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newReservation),
          })
            .then((r) => r.json())
            .then(
                setReservationData({
                name:"",
                date:"",
                time:"",
                num:"",
                contact:"",
                occasion:"",
              })
            );
          navigate("/myreservations");
        }

    
    return(
        <>
       <h1>Reservation</h1> 
       <form onSubmit={handleReservationSubmit}>
        <div >
        <label htmlFor="name"  >Name</label>
         <input type="text" name="name" value={reservationData.name} onChange={handleReservationChange} placeholder="name" />
       </div>
       <div >
        <label htmlFor="date"  >Date</label>
         <input type="date" name="date" value={reservationData.date} onChange={handleReservationChange} placeholder="date" />
       </div>
       <div >
        <label htmlFor="time"  >Time</label>
         <input type="time" name="time" value={reservationData.time} onChange={handleReservationChange} placeholder="time" />
       </div>
       <div >
        <label htmlFor="num"  >Num</label>
         <input type="number" name="num" value={reservationData.num} onChange={handleReservationChange} placeholder="num" />
       </div>
       <div >
        <label htmlFor="date"  >Contact</label>
         <input type="tel" name="contact" value={reservationData.contact} onChange={handleReservationChange} placeholder="contact" />
       </div>
       <div >
        <label htmlFor="occasion"  >Occasion</label>
         <input type="text" name="occasion" value={reservationData.occasion} onChange={handleReservationChange} placeholder="occasion" />
       </div>
       <button type="submit">Reserve</button>

       </form>

        </>
    )
}
export default ReservationForm;