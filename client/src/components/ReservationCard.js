import { useState } from "react";
import EditReservationForm from "./EditReservationForm";
import "./stylingfolder/EditReservation.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function ReservationCard({ reservation, handleCancel, onUpdateReservation }) {
  const { name, date, time, num, contact, occasion } = reservation;
  const [isEditing, setIsEditing] = useState(false);
  const handleReservationUpdate = (updatedReservation) => {
    setIsEditing(false);
    onUpdateReservation(updatedReservation);
  };

  function handleDeleteClick() {
    fetch(`/reservations/${reservation.id}`, {
      method: "DELETE",
    });
    handleCancel(reservation.id);
  }

  return (
    <>
      {isEditing ? (
        <Box m={4} sx={{ width: 500 }}>
          <div className="overlay2">
          <EditReservationForm
            reservation={reservation}
            onUpdateReservation={handleReservationUpdate}
          />
          </div>
        </Box>
      ) : (
        <>
          <Box m={4} sx={{ width: 500 }}>
            <Card width={5}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {reservation.restaurant.name}
                </Typography>
                <br />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Guest Details
                </Typography>
                <Typography variant="h6" component="div">
                  {name}
                </Typography>
                <Typography variant="h6">{contact}</Typography>
                <Typography variant="h6">Date:{date}</Typography>
                <Typography variant="h6">Time : {time}</Typography>
                <Typography variant="h6">Guests : {num}</Typography>
                <Typography variant="h6">Occasion:{occasion}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                  {" "}
                  Modify Booking
                </Button>

                <Button onClick={handleDeleteClick}>Cancel Booking</Button>
              </CardActions>
            </Card>
          </Box>
        </>
      )}
    </>
  );
}
export default ReservationCard;

//  {/* <a href={`/reservations/${reservation.id}/update`}>Edit</a> */}

//      {/* <button  >Modify Booking</button>
//      <Link to={`/myreservations/${reservation.id}`}>Modify Booking</Link> */}
//       {/* <Link to={`/reservations/${reservation.id}/update`}>Edit</Link> */}
//       {/* <button onClick={()=>{
//         setCurrent(reservation)
//       }} >Edit</button> */}
