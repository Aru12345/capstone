import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Cont } from "../Cont";
import "./stylingfolder/EditReservation.css";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: 200,
  marginRight: 100,
}));

function ReservationForm() {
  const params = useParams();
  const { user, reservations, setReservations } = useContext(Cont);

  const [reservationData, setReservationData] = useState({
    name: "",
    date: "",
    time: "",
    num: "",
    contact: "",
    occasion: "",
  });
  function handleReservationChange(event) {
    setReservationData({
      ...reservationData,
      [event.target.name]: event.target.value,
    });
  }

  /* Since DatePicker and TimePicker onChange events send the new value instead of event */
  function handleReservationChangeWithNameAndValue(name, newValue) {
    setReservationData({
      ...reservationData,
      [name]: newValue,
    });
  }

  function handleReservationSubmit(event) {
    event.preventDefault();
    const newReservation = {
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
      .then(function (res) {
        setReservationData({
          name: "",
          date: "",
          time: "",
          num: "",
          contact: "",
          occasion: "",
        });

        setReservations([...reservations, res]);
      });
  }

  function handleAlert() {
    alert("Your Reservation is confirmed");
  }

  return (
    <>
      <div className="overlay3">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleReservationSubmit}
        >
          <h1 className="editheadings">Reserve 🍽️</h1>

          <FormControl className="inputstyle">
            <InputLabel htmlFor="component-outlined">Name</InputLabel>
            <OutlinedInput
              type="text"
              name="name"
              id="name"
              value={reservationData.name}
              onChange={handleReservationChange}
              label="Name"
            />
          </FormControl>
          <br />
          <FormControl name="date" className="inputstyle">
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              name="date"
              fullWidth
            >
              <DatePicker
                label="Date"
                name="date"
                value={reservationData.date || null}
                onChange={
                  (newVal) =>
                    handleReservationChangeWithNameAndValue("date", newVal)
                  /* Since DatePicker and TimePicker onChange events send the new value instead of event */
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl className="inputstyle">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                name="time"
                label="Time"
                value={reservationData.time || null}
                onChange={
                  (newVal) =>
                    handleReservationChangeWithNameAndValue("time", newVal)
                  /* Since DatePicker and TimePicker onChange events send the new value instead of event */
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <br />
          <FormControl className="inputstyle">
            <InputLabel htmlFor="component-outlined">No. of Guests</InputLabel>
            <OutlinedInput
              type="number"
              name="num"
              value={reservationData.num}
              onChange={handleReservationChange}
            />
          </FormControl>
          <br />
          <FormControl className="inputstyle">
            <InputLabel htmlFor="component-outlined">Contact</InputLabel>
            <OutlinedInput
              type="tel"
              name="contact"
              value={reservationData.contact}
              onChange={handleReservationChange}
              placeholder="contact"
            />
          </FormControl>
          <br />
          <FormControl className="inputstyle">
            <InputLabel htmlFor="component-outlined">Occasion</InputLabel>
            <OutlinedInput
              type="text"
              name="occasion"
              value={reservationData.occasion}
              onChange={handleReservationChange}
            />
          </FormControl>
          <Stack paddingLeft={15} direction="row" id="loginbutton">
            <ColorButton
              variant="contained"
              type="submit"
              onClick={handleAlert}
            >
              {" "}
              Reserve
            </ColorButton>
          </Stack>
        </Box>
      </div>
    </>
  );
}
export default ReservationForm;
