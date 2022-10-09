import { useState } from "react";
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

function EditReservationForm({ reservation, onUpdateReservation }) {
  const { name, date, time, num, contact, occasion } = reservation;
  const [updateName, setUpdatedName] = useState(name);
  const [updateDate, setUpdatedDate] = useState(date);
  const [updateTime, setUpdatedTime] = useState(time);
  const [updateNum, setUpdatedNum] = useState(num);
  const [updateContact, setUpdatedContact] = useState(contact);
  const [updateOccasion, setUpdatedOccasion] = useState(occasion);

  function handleEditClick(e) {
    e.preventDefault();

    fetch(`/reservations/${reservation.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updateName,
        date: updateDate,
        time: updateTime,
        num: updateNum,
        contact: updateContact,
        occasion: updateOccasion,
      }),
    })
      .then((r) => r.json())
      .then((updatedReservation) => {
        onUpdateReservation(updatedReservation);
      });
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleEditClick}
      >
        <h2 className="editheadings">Modify Reservation</h2>

        <FormControl className="inputstyle">
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            type="text"
            // id="email"
            id="name"
            value={updateName}
            onChange={(e) => setUpdatedName(e.target.value)}
            label="Name"
          />
        </FormControl>
        <br />

        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
            <DatePicker
              label="Date"
              value={updateDate}
              onChange={(val) => setUpdatedDate(val)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <br />
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Time"
              value={updateTime}
              onChange={(val) => setUpdatedTime(val)}
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
            value={updateNum}
            onChange={(e) => setUpdatedNum(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl className="inputstyle">
          <InputLabel htmlFor="component-outlined">Contact</InputLabel>
          <OutlinedInput
            type="tel"
            name="contact"
            value={updateContact}
            onChange={(e) => setUpdatedContact(e.target.value)}
            placeholder="contact"
          />
        </FormControl>
        <br />
        <FormControl className="inputstyle">
          <InputLabel htmlFor="component-outlined">Occasion</InputLabel>
          <OutlinedInput
            type="text"
            name="occasion"
            value={updateOccasion}
            onChange={(e) => setUpdatedOccasion(e.target.value)}
          />
        </FormControl>

        <Stack paddingLeft={15} direction="row" id="loginbutton">
          <ColorButton variant="contained" type="submit">
            {" "}
            Update Reservation
          </ColorButton>
        </Stack>
      </Box>
    </>
  );
}
export default EditReservationForm;
