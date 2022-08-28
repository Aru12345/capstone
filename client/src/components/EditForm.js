import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function EditForm({reservations,setReservations}){

    const[data,setData]=useState()
    const[id,setId]=useState();
    const[reservation,setReservation]=useState();
  
    const location=useLocation();
    
    useEffect(()=>{
      
        setId(location.pathname.split("/")[2])
        for (let curr  of reservations) { 
            console.log(curr)
            console.log(""+curr.id,location.pathname.split("/")[2])
            if (""+curr.id==location.pathname.split("/")[2]){
                console.log("found match")
                setReservation(curr)
            }
        } 
        console.log("reservation" ,reservation)

  
      },[])
     
  

      console.log("reservations",reservations)

      function handleUpdateReservation(updatedReservation) {
        const updatedReservations = reservation.map((reservation) =>{
        return reservation.id === updatedReservation.id ? updatedReservation : reservation;
         } );
        setReservations(updatedReservations);
      }


      function handleUpdateClick() {
      
  
        fetch(`/reservation/${reservation.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({  }),
        })
          .then((r) => r.json())
          .then((updatedReview) => {
            handleUpdateReservation(updatedReview);
          });
      }
  

    
    return(
        <>
      
       { reservation &&
       <div>
          <h1>Edit form</h1>
         <form >
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