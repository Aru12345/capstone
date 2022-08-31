import { useEffect,useState } from "react";
function EditReservationForm(){
    return(
        <>
       <h2>Modify Reservation</h2>
       <form   >
        <div >
        <label htmlFor="name"  >Name</label>
         <input type="text" name="name" placeholder="name" />
       </div>
       <div >
        <label htmlFor="date"  >Date</label>
         <input type="date" name="date"   placeholder="date" />
       </div>
       <div >
        <label htmlFor="time"  >Time</label>
         <input type="time" name="time" placeholder="time" />
       </div>
       <div >
        <label htmlFor="num"  >Num</label>
         <input type="number" name="num"   placeholder="num" />
       </div>
       <div >
        <label htmlFor="date"  >Contact</label>
         <input type="tel" name="contact"  placeholder="contact" />
       </div>
       <div >
        <label htmlFor="occasion"  >Occasion</label>
         <input type="text" name="occasion" placeholder="occasion" />
       </div>
       <button type="submit">Update Reservation</button>
       </form>
        
        </>
    )
}
export default EditReservationForm;