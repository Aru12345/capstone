import { useState } from "react";


function EditReservationForm({reservation,onUpdateReservation}){
    const{ name, date, time, num, contact, occasion}=reservation;
    const[updateName,setUpdatedName]=useState(name);
   const[updateDate,setUpdatedDate]=useState(date);
   const[updateTime,setUpdatedTime]=useState(time);
   const[updateNum,setUpdatedNum]=useState(num);
   const[updateContact,setUpdatedContact]=useState(contact);
   const[updateOccasion,setUpdatedOccasion]=useState(occasion);


  

   function handleEditClick(e) {
       e.preventDefault()
  
            fetch(`/reservations/${reservation.id}`, {
              method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ name:updateName,date:updateDate, time:updateTime,num:updateNum,contact:updateContact,occasion:updateOccasion}),
             })
               .then((r) => r.json())
              .then((updatedReservation) => {
                 onUpdateReservation(updatedReservation);
              });
       }
    return(
        <>
       <h2>Modify Reservation</h2>
       <form onSubmit={handleEditClick}  >
       
        <div >
        <label htmlFor="name"  >Name</label>
         <input type="text" name="name"  value={updateName}    onChange={(e) => setUpdatedName(e.target.value)} placeholder="name" />
       </div>
       <div >
        <label htmlFor="date"  >Date</label>
         <input type="date" name="date"   value={updateDate}  onChange={(e) => setUpdatedDate(e.target.value)}  placeholder="date" />
       </div>
       <div >
        <label htmlFor="time"  >Time</label>
         <input type="time" name="time"  value={updateTime}  onChange={(e) => setUpdatedTime(e.target.value)} placeholder="time" />
       </div>
       <div >
        <label htmlFor="num"  >Num</label>
         <input type="number" name="num"  value={updateNum}  onChange={(e) => setUpdatedNum(e.target.value)}  placeholder="num" />
       </div>
       <div >
        <label htmlFor="date"  >Contact</label>
         <input type="tel" name="contact" value={updateContact}  onChange={(e) => setUpdatedContact(e.target.value)}  placeholder="contact" />
       </div>
       <div >
        <label htmlFor="occasion"  >Occasion</label>
         <input type="text" name="occasion"  value={updateOccasion}   onChange={(e) => setUpdatedOccasion(e.target.value)} placeholder="occasion" />
       </div>
       <button type="submit">Update Reservation</button>
       </form>
        
        </>
    )
}
export default EditReservationForm;