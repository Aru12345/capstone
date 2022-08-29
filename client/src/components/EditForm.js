import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
function EditForm({reservations,setReservations,onUpdateReservation}){

    const[id,setId]=useState();
    const[reservation,setReservation]=useState();
  
    const location=useLocation();
    const navigate=useNavigate();
    
    useEffect(()=>{ 
        setId(location.pathname.split("/")[2])
        for (let curr  of reservations) { 
            if (""+curr.id===location.pathname.split("/")[2]){
                setReservation(curr)
            }
        }       
      },[])


    function handleReservationUpdate() {
      
  
      fetch(`/reservations/${reservation.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:"",
          date:"",
          time:"",
          num:"",
          contact:"",
          occasion:"",

        }),
      })
        .then((r) => r.json())
        .then((updatedReservation) => {
          onUpdateReservation(updatedReservation);
        });
        navigate("/myreservations");
    }

    
    return(
        <>
      
       { reservation &&
       <div>
          <h1>Edit form</h1>
         <form   onSubmit={handleReservationUpdate}>
        <div >
        <label htmlFor="name"  >Name</label>
         <input type="text" name="name" defaultValue={reservation.name}  placeholder="name" />
       </div>
       <div >
        <label htmlFor="date"  >Date</label>
         <input type="date" name="date"  defaultValue={reservation.date} placeholder="date" />
       </div>
       <div >
        <label htmlFor="time"  >Time</label>
         <input type="time" name="time" defaultValue={reservation.time}  placeholder="time" />
       </div>
       <div >
        <label htmlFor="num"  >Num</label>
         <input type="number" name="num"  defaultValue={reservation.num}  placeholder="num" />
       </div>
       <div >
        <label htmlFor="date"  >Contact</label>
         <input type="tel" name="contact" defaultValue={reservation.contact} placeholder="contact" />
       </div>
       <div >
        <label htmlFor="occasion"  >Occasion</label>
         <input type="text" name="occasion" defaultValue={reservation.occasion}  placeholder="occasion" />
       </div>
       <button type="submit">Update Reservation</button>

       </form>
       </div>
        } 
       
        </>
    )
}
export default EditForm;