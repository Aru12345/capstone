import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { Cont } from "./Cont";
import { useContext } from "react";
function EditForm({reservations,setReservations,onUpdateReservation}){

  const {current,setCurrent}=useContext(Cont)
  const { name,date,time,num,contact,occasion } = current;

  const[updateName,setUpdatedName]=useState(name);
  const[updateDate,setUpdatedDate]=useState(date);
  const[updateTime,setUpdatedTime]=useState(time);
  const[updateNum,setUpdatedNum]=useState(num);
  const[updateContact,setUpdatedContact]=useState(contact);
  const[updateOccasion,setUpdatedOccasion]=useState(occasion);

    const[id,setId]=useState();
    const[r,sR]=useState();
  
    const location=useLocation();
    const navigate=useNavigate();
    
    useEffect(()=>{ 
        setId(location.pathname.split("/")[2])
        for (let curr  of reservations) { 
            if (""+curr.id===location.pathname.split("/")[2]){
                sR(curr)
            }
        }       
      },[])
  
      function handleEditClick() {
      
  
        fetch(`/reservation/${current.id}`, {
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
      
       { r &&
       <div>
          <h1>Edit form</h1>
         <form   onSubmit={handleEditClick}>
        <div >
        <label htmlFor="name"  >Name</label>
         <input type="text" name="name" defaultValue={r.name}  value={updateName}    onChange={(e) => setUpdatedName(e.target.value)} placeholder="name" />
       </div>
       <div >
        <label htmlFor="date"  >Date</label>
         <input type="date" name="date"  defaultValue={r.date} value={updateDate}  onChange={(e) => setUpdatedDate(e.target.value)} placeholder="date" />
       </div>
       <div >
        <label htmlFor="time"  >Time</label>
         <input type="time" name="time" defaultValue={r.time} value={updateTime}  onChange={(e) => setUpdatedTime(e.target.value)}  placeholder="time" />
       </div>
       <div >
        <label htmlFor="num"  >Num</label>
         <input type="number" name="num"  defaultValue={r.num} value={updateNum}  onChange={(e) => setUpdatedNum(e.target.value)} placeholder="num" />
       </div>
       <div >
        <label htmlFor="date"  >Contact</label>
         <input type="tel" name="contact" defaultValue={r.contact} value={updateContact}  onChange={(e) => setUpdatedContact(e.target.value)} placeholder="contact" />
       </div>
       <div >
        <label htmlFor="occasion"  >Occasion</label>
         <input type="text" name="occasion" defaultValue={r.occasion} value={updateOccasion}   onChange={(e) => setUpdatedOccasion(e.target.value)} placeholder="occasion" />
       </div>
       <button type="submit">Update Reservation</button>

       </form>
       </div>
        } 
       
        </>
    )
}
export default EditForm;