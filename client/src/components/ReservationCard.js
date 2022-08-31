import { Link } from "react-router-dom";
import EditForm from "./EditForm";
import { useContext,useState } from "react";
import { Cont } from "./Cont";
import { useParams } from "react-router-dom";
import EditReservationForm from "./EditReservationForm";
function ReservationCard({reservation,reservations,setReservations,handleUpdateReservation,handleCancel}){

  const {id} = useParams()
  const{  name, date, time, num, contact, occasion}=reservation;
      const[editForm,setEditForm]=useState(false);

      function handleEditClick(e){
        if(e.target.name ==='deleter'){
         
            fetch(`/reservations/${reservation.id}`, {
              method: "DELETE",
            })
              handleCancel(reservation.id)
          

        }else{
          setEditForm(true)
       

        }
        
      }

    
    return(
        <>
        {editForm ?
    
        <div><h2>{name}</h2>
        <h2>{date}</h2>
        <h2>{time}</h2>
        <h2>{num}</h2>
        <h2>{contact}</h2>
        <h2>{occasion}</h2>
        <h3>For-{reservation.restaurant.name}</h3>
    
        <button  name="editr" onClick={handleEditClick}>Modify Booking</button>
        <button name="deleter" onClick={handleEditClick}>Cancel</button>  :<EditReservationForm />}
       
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